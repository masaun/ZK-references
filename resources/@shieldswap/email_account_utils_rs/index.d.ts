import * as $ from "./dist/email_account_utils_rs.js";

/**
 * @deprecated use `get_public_key_limbs` and `get_signature_limbs` instead
 */
export function get_limbs(...args: Parameters<typeof $.get_limbs>): {
  public_key_limbs: string[];
  public_key_redc_limbs: string[];
  signature_limbs: string[];
};

export function get_public_key_limbs(
  ...args: Parameters<typeof $.get_public_key_limbs>
): {
  public_key_limbs: string[];
  public_key_redc_limbs: string[];
};

export function get_signature_limbs(
  ...args: Parameters<typeof $.get_signature_limbs>
): string[];
