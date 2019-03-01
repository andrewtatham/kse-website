aws s3 rm "s3://kaizensoftwareengineering.com/" --recursive
aws s3 cp "public" "s3://kaizensoftwareengineering.com/" --recursive --include "*" --acl public-read