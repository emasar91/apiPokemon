'use strict';

module.exports = {
    isEmpty: function (array) {
        return array.length === 0
    },
    hasAllStats: function (stats) {
        try {

            const { hp, attack, defense, special_attack,
                special_defense, accuracy, evasion } = stats

            if (!hp || !attack || !defense || !special_attack ||
                !special_defense || !accuracy || !evasion) {
                const error = new Error('all stats are required (hp, attack, defense, special_attack,special_defense, accuracy, evasion)')
                error.status = 400
                throw error
            }
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