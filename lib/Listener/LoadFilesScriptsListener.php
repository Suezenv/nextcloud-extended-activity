<?php
namespace OCA\ExtendedActivity\Listener;

use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;
use OCA\ExtendedActivity\AppInfo\Application;

class LoadFilesScriptsListener implements IEventListener {
    public function handle(Event $event): void {
        // Cette méthode n'est appelée que lorsque l'app Files le demande.
        // OCA.Files est garanti d'être initialisé à ce stade.
        Util::addScript(Application::APP_ID, 'extended_activity-filesPlugin');
    }
}