export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    apiGateway: {
        URL: "https://737xmpm1a3.execute-api.eu-west-1.amazonaws.com/prod",
        REGION: "eu-west-1"
    },
    s3: {
        BUCKET: "notes.spiraltechnology.co.uk"
    },
    cognito: {
        USER_POOL_ID: "eu-west-1_koYPKYSoO",
        APP_CLIENT_ID: "3kep8pujknbvqvimpkq2qbrk9e",
        REGION: "eu-west-1",
        IDENTITY_POOL_ID: "eu-west-1:ab36c2ac-95d6-4b02-8e39-c5f07e96d4f7"
    }
};