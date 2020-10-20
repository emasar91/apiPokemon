'use strict'
const moment = require('moment')

module.exports = async function generateNoteContent (data) {
  if (
    !data ||
    !data.action ||
    !data.status ||
    !data.arrangedDate ||
    !data.link
  ) {
    const error = new Error('Missing required arguments')
    error.status = 400
    throw error
  }

  const content = `### Test Drive ${data.action}
**Status:** *${data.status}*
**Date:** *${moment(data.arrangedDate).format("DD/MM/YYYY, h:mm a")}*\n
[View/edit Test Drive](${data.link})`

  return content
}
