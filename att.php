// Imports the Cloud Storage client library.
use Google\Cloud\Storage\StorageClient;

function auth_cloud_implicit($projectId)
{
    $config = [
        'projectId' => $projectId,
    ];

    # If you don't specify credentials when constructing the client, the
    # client library will look for credentials in the environment.
    $storage = new StorageClient($config);

    # Make an authenticated API request (listing storage buckets)
    foreach ($storage->buckets() as $bucket) {
        printf('Bucket: %s' . PHP_EOL, $bucket->name());
    }
}


# Includes the autoloader for libraries installed with composer
require __DIR__ . '/vendor/autoload.php';

# Imports the Google Cloud client library
use Google\Cloud\Storage\StorageClient;

# Your Google Cloud Platform project ID
$projectId = 'YOUR_PROJECT_ID';

# Instantiates a client
$storage = new StorageClient([
    'projectId' => $projectId
]);

# The name for the new bucket
$bucketName = 'my-new-bucket';

# Creates the new bucket
$bucket = $storage->createBucket($bucketName);

echo 'Bucket ' . $bucket->name() . ' created.';
