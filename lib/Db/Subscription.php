<?php

declare(strict_types=1);

namespace OCA\ExtendedActivity\Db;

use OCP\AppFramework\Db\Entity;

/**
 * @method string getUserId()
 * @method void setUserId(string $userId)
 * @method int getFileId()
 * @method void setFileId(int $fileId)
 * @method string|null getPath()
 * @method void setPath(?string $path)
 */
class Subscription extends Entity {
    protected ?string $userId = null;
    protected ?int $fileId = null;

    public function __construct() {
        $this->addType('userId', 'string');
        $this->addType('fileId', 'integer');
    }
}