import { NhostClient } from '@nhost/react';
import * as SecureStorage from "expo-secure-store";


const nhost = new NhostClient({
    subdomain: 'adowszcmemcscdktrcox',
    region: 'us-east-1',
    clientStorageType: 'expo-secure-storage',
    clientStorage: SecureStore,
  });

export { nhost }