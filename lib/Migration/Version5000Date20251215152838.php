<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\ExtendedActivity\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
use Override;

/**
 * FIXME Auto-generated migration step: Please modify to your needs!
 */
class Version5000Date20251215152838 extends SimpleMigrationStep {

	/**
	 * @param IOutput $output
	 * @param Closure(): ISchemaWrapper $schemaClosure
	 * @param array $options
	 */
	#[Override]
	public function preSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
	}

	/**
	 * @param IOutput $output
	 * @param Closure(): ISchemaWrapper $schemaClosure
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	#[Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        // Vérification si la table existe déjà pour éviter les erreurs
        if (!$schema->hasTable('ext_act_subscriptions')) {
            
            // Création de la table (le préfixe oc_ est ajouté automatiquement)
            $table = $schema->createTable('ext_act_subscriptions');

            // Colonne ID (Clé primaire)
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'length' => 4,
            ]);

            // Colonne User ID (String car les uid Nextcloud sont des chaînes)
            $table->addColumn('user_id', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);

            // Colonne File ID (Lien stable vers le fichier)
            $table->addColumn('file_id', 'integer', [
                'notnull' => true,
                'length' => 4,
            ]);


            // Définition de la clé primaire
            $table->setPrimaryKey(['id']);

            // Index Unique : Un utilisateur ne peut s'abonner qu'une fois au même fichier
            // Cela accélère aussi considérablement les requêtes de filtrage
            $table->addUniqueIndex(['user_id', 'file_id'], 'ea_sub_uniq_idx');
            
            // Index simple sur file_id pour trouver qui est abonné à un fichier (pour les notifs par ex)
            $table->addIndex(['file_id'], 'ea_sub_file_idx');
        }

        return $schema;
	}

	/**
	 * @param IOutput $output
	 * @param Closure(): ISchemaWrapper $schemaClosure
	 * @param array $options
	 */
	#[Override]
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
	}
}
