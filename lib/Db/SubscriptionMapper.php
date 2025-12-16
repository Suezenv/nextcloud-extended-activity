<?php

declare(strict_types=1);

namespace OCA\ExtendedActivity\Db;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

class SubscriptionMapper extends QBMapper {

    public function __construct(IDBConnection $db) {
        parent::__construct($db, 'ext_act_subscriptions', Subscription::class);
    }

    /**
     * Trouve un abonnement spécifique (utile pour vérifier s'il existe déjà)
     * @throws DoesNotExistException
     */
    public function findByUserAndFile(string $userId, int $fileId): Subscription {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
           ->from('ext_act_subscriptions')
           ->where(
               $qb->expr()->eq('user_id', $qb->createNamedParameter($userId)),
               $qb->expr()->eq('file_id', $qb->createNamedParameter($fileId))
           );

        // findEntity lance une DoesNotExistException si rien n'est trouvé
        return $this->findEntity($qb);
    }

    /**
     * Récupère tous les abonnements d'un utilisateur (pour le filtrage futur)
     * @return Subscription[]
     */
    public function findAllByUser(string $userId): array {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
           ->from('ext_act_subscriptions')
           ->where(
               $qb->expr()->eq('user_id', $qb->createNamedParameter($userId))
           );

        return $this->findEntities($qb);
    }
}