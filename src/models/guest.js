/**
 * Guest model module.
 * @module models/guest
 */

/**
 * Verify viewer has access
 * @function
 * @param {object} - The viewer.
 * @param {string} - The guest's id.
 * @returns {boolean} - Does the viewer have access to data.
 */
function checkHasAccess(viewer, id) {
    // Add verification check here
    return true;
}

/**
 * Create `Guest` object.
 * @function
 * @param {id} id - The Guest's id.
 * @param {string} name - The Guest's name.
 * @param {boolean} vip - The Guest's VIP status.
 * @returns {Object} - A Guest.
 */
export default class Guest {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.vip = data.vip;
    }

    static async gen(viewer, id) {
        const data = null;

        if (data === null) return null;

        const hasAccess = checkHasAccess(viewer);

        return hasAccess ? new Guest(data) : null; 
    }
}
