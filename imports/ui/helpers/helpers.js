/**
 * Created by Wayuki on 07-Feb-17 0007.
 */
export const generateAlias = input => (
    input.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-')
);

export default () => {};
