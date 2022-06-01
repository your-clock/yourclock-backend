const relojService = require('../../services/reloj')

exports.setData = async (req, res) => {
	try {
		await relojService.emitData(req.body, req.headers.device_id)
		return res.status(200).send("OK")
	} catch (error) {
		return res.status(error.statusCode || 500).send(error.body || error.toString())
	}
}

exports.setAlarm = async (req, res) => {
	try {
		const response = await relojService.sendAlarm(req.body.time)
		return res.status(200).json({
			msg: "Alarma configurada exitosamente",
			code: 308,
			info: response
		})
	} catch (error) {
		return res.status(error.statusCode || 500).send(error.body || error.toString())
	}
}
