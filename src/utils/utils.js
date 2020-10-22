const { error } = require("winston")

module.exports = {
    isEmpty: function (array) {
        return array.length === 0
    },
    hasAllStats: function (stats) {
        if (stats.length !== 7) {
            const error = new Error('hp, attack, defense, special-attack, special-defense, defense, accuracy and evasion are required')
            error.status = 400
            throw error
        }
        try {
            const [{ hp }, { attack }, { defense }, { special_attack },
                { special_defense }, { accuracy }, { evasion }] = stats

            if (
                typeof hp !== 'number' ||
                typeof attack !== 'number' ||
                typeof defense !== 'number' ||
                typeof special_attack !== 'number' ||
                typeof special_defense !== 'number' ||
                typeof accuracy !== 'number' ||
                typeof evasion !== 'number'
            ) {
                const error = new Error('stats must be numbers')
                error.status = 400
                throw error
            }
            if (hp && attack && defense && special_attack &&
                special_defense && accuracy && evasion) {
                return true
            }
            return false
        } catch (error) {
            throw error
        }
    }
}