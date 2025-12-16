<?php

declare(strict_types=1);

namespace OCA\ExtendedActivity\Service;

use OCA\ExtendedActivity\Db\Subscription;
use OCA\ExtendedActivity\Db\SubscriptionMapper;
use OCP\AppFramework\Db\DoesNotExistException;

class SubscriptionService {

    private SubscriptionMapper $mapper;

    public function __construct(SubscriptionMapper $mapper) {
        $this->mapper = $mapper;
    }

    public function subscribe(string $userId, int $fileId): void {
        try {
            $this->mapper->findByUserAndFile($userId, $fileId);
        } catch (DoesNotExistException $e) {
            $subscription = new Subscription();
            $subscription->setUserId($userId);
            $subscription->setFileId($fileId);

            $this->mapper->insert($subscription);
        }
    }

    public function unsubscribe(string $userId, int $fileId): void {
        try {
            $subscription = $this->mapper->findByUserAndFile($userId, $fileId);
            $this->mapper->delete($subscription);
        } catch (DoesNotExistException $e) {
        }
    }
}