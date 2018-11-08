# candidateXYZ

The second MVP version of [candidateXYZ](https://candidatexyz.com). A fully customizable template for campaign websites. Integrated fully with the candidateXYZ app.

![](https://s3.amazonaws.com/jakekinsella/candidatexyz-2.0.png)

## Local development

Environment Variables

```
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

## Running

`bundle exec rails s -b 127.0.0.1 -p 3001`

## Deployment instructions

`bundle exec rake assets:precompile RAILS_ENV=production`
`./deploy/deploy`

secrets.env

```
SECRET_KEY_BASE={GENERATED_SECRET_KEY}
PGUSER={DATABASE_USERNAME}
PGPASSWORD={DATABASE_PASSWORD}
PGHOST={DATABASE_ADDRESS}
PGPORT=5432
AWS_REGION={AWS_REGION}
PROJECT_NAME={TERRAFORM_NAME}
USERNAME=demo
```
