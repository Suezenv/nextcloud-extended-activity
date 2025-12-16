<?php

declare(strict_types=1);

namespace OCA\ExtendedActivity\Controller;

use OCA\ExtendedActivity\Service\SubscriptionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;

class SubscriptionController extends Controller {

    private SubscriptionService $service;
    private IUserSession $userSession;

    public function __construct(
        string $AppName,
        IRequest $request,
        IUserSession $userSession,
        SubscriptionService $service
    ) {
        parent::__construct($AppName, $request);
        $this->userSession = $userSession;
        $this->service = $service;
    }

    #[NoAdminRequired]
    public function createSubscription(int $fileId): DataResponse {
        $user = $this->userSession->getUser();

        if ($user === null) {
            return new DataResponse(['message' => 'Non authentifié'], Http::STATUS_UNAUTHORIZED);
        }

        try {
            $this->service->subscribe(
                $user->getUID(),
                $fileId
            );
            return new DataResponse(['status' => 'success']);
        } catch (\Exception $e) {
            return new DataResponse(['message' => 'Erreur lors de l\'abonnement'], Http::STATUS_INTERNAL_SERVER_ERROR);
        }
    }

    #[NoAdminRequired]
    public function deleteSubscription(int $fileId): DataResponse {
        $user = $this->userSession->getUser();

        if ($user === null) {
            return new DataResponse(['message' => 'Non authentifié'], Http::STATUS_UNAUTHORIZED);
        }

        try {
            $this->service->unsubscribe(
                $user->getUID(),
                $fileId
            );
            return new DataResponse(['status' => 'success']);
        } catch (\Exception $e) {
            return new DataResponse(['message' => 'Erreur lors du désabonnement'], Http::STATUS_INTERNAL_SERVER_ERROR);
        }
    }
}