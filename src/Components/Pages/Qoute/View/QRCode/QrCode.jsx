import React from 'react'
import QRCode from 'qrcode'

function QrCode({invoiceNumber}) {
    const [src, setSrc] = React.useState('')
    React.useEffect(()=>{
        QRCode.toDataURL("E-Invoice " + invoiceNumber).then((data)=>{setSrc(data)})
    })
  return (
    <div>
        <img src={src} alt="" />
    </div>
  )
}

export default QrCode