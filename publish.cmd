aws s3 rm "s3://kaizensoftwareengineering.com/" --recursive
aws s3 cp "site" "s3://kaizensoftwareengineering.com/" --recursive --include "*" --acl public-read