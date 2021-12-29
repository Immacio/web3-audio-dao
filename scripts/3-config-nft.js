import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfB562624C801EF05bd87953408E383441E47f9c9",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The AudioDAO Headset",
        description: "This NFT will give you access to AudioDAO!",
        image: readFileSync("scripts/assets/headphones.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()