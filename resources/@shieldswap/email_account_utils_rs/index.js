import * as $ from "./dist/email_account_utils_rs.js";

/**
 * @param {Parameters<typeof $.get_limbs>} args
 */
export function get_limbs(...args) {
  return JSON.parse($.get_limbs(...args));
}

/**
 * @param {Parameters<typeof $.get_public_key_limbs>} args
 */
export function get_public_key_limbs(...args) {
  return JSON.parse($.get_public_key_limbs(...args));
}

/**
 * @param {Parameters<typeof $.get_signature_limbs>} args
 */
export function get_signature_limbs(...args) {
  return JSON.parse($.get_signature_limbs(...args));
}
