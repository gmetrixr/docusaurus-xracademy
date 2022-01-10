---
sidebar_label: Plugin SMS API
sidebar_position: 2
hide_table_of_contents: true
---
import { SMSApiDoc } from "/src/components/ApiDoc"

# File Manager

### How to upload file

#### Call presigned upload enpoint to get presined url for file and and it's thumbnail file.

```bash
async function getPresignedUrl({ file_paths, folderId, name }: { rootName: string; folderId: number; name: string }) {
  const response = await fetch(`/plugin/presignUpload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${userApiToken}`,
    },
    body: JSON.stringify({ rootName, folderId, name }),
  });
  return await response.json();
}
```

#### write selected file to presigned url
```bash
async function writeFileToPresignedUrl({ presignedUrl, file, name }: { presignedUrl: string; file: File }) {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "image/*"
    },
    body: file
  });
  return await response.json();
}
```

#### call create file api endpoin to add new file into database.

``` bash
async function createFile({ rootName, folderId, uploadMeta }: {
  rootName: string;
  folderId: number;
  uploadMeta: {
    name: string;
    type: string;
    filePaths: {
      o: string;
      t?: string;
      r?: string;
    };
    uuid: string;
    size: number;
    relativePath?: string;
  };
}) {
  const response = await fetch(`/plugin/createFile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${userApiToken}`,
    },
    body: JSON.stringify({ rootName, folderId, name }),
  });
  return await response.json();
}
```
Complete reference documentation for the Plugin API. Includes code snippets and examples.

### SMS API
<SMSApiDoc />
