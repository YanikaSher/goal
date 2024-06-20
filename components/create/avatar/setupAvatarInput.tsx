"use client";

import { Input } from "@nextui-org/input";

export function SetupAvatarInput({ setAvatarFile }: { setAvatarFile: any }) {
  return (
    <Input
      type="file"
      onChange={(event: any) => {
        const targetFile = event.target.files[0];
        setAvatarFile(targetFile);
      }}
    />
  );
}
