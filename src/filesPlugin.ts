import { registerFileAction, DefaultType, Node } from '@nextcloud/files';
import { translate as t } from '@nextcloud/l10n';
import { generateUrl } from '@nextcloud/router';
import axios from '@nextcloud/axios';
import { showSuccess, showError } from '@nextcloud/dialogs';


// On définit une icône SVG simple (ici une enveloppe pour "S'abonner")
// Vous pouvez remplacer ce SVG par n'importe quel autre.
const mailIconSvg = () => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
`;

registerFileAction({
    id: 'subscribe_action',
    displayName: () => t('extended_activity', 'S\'abonner'),
    enabled: (nodes: Node[]) => nodes.length === 1,

    type: DefaultType.Inline,

    iconSvgInline: mailIconSvg, 

    iconClass: 'icon-activity',

    exec: async (node: Node) => {
        console.log('Action S\'abonner déclenchée pour :', node.path);
        try {
            const url = generateUrl('/apps/extended_activity/api/subscriptions');
            const payload = {
                fileId: node.fileid
            };
            await axios.post(url, payload);
            showSuccess(t('extended_activity', 'Vous êtes maintenant abonné à {file}', { file: node.displayname }));

        } catch (error) {
            console.error('Erreur lors de l\'abonnement extended_activity:', error);
            showError(t('extended_activity', 'Impossible de s\'abonner à ce fichier.'));
        }

    }
});