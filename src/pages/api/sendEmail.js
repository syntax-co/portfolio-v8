const sendGrid = require('@sendgrid/mail')


sendGrid.setApiKey(process.env.SENDGRID_KEY);

export default async function handler(req, res) {
    
    const body = req.body;
    const message = {
        to:'munozchris484@gmail.com',
        from:'munozchris484@gmail.com',
        subject:`freelance contact`,
        text:body.message,
    }
    
    try {
        const result = await sendGrid.send(message)
        console.log(result)
        res.status(200).json({success:true});
    } catch(error) {
        res.status(404);
    }
    // then(() => {
    //     console.log('hit')
    //     res.status(200).json({success:true})
    // }).catch((error) => {
    //     res.status(404);
    // })
}