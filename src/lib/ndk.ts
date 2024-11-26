import NDK, { NDKNip07Signer } from "@nostr-dev-kit/ndk";

const connectedRelays = ["wss://relay.primal.net/", "wss://relay.damus.io/"];

const nip07signer = new NDKNip07Signer();

export const ndk = new NDK({
  explicitRelayUrls: connectedRelays,
  signer: nip07signer,
});
