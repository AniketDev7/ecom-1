function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","{{trackingId}}"),$(document).ready(function(){simpleCart({cartStyle:"div",cartColumns:[{view:"image",attr:"thumb",label:!1},{attr:"name",label:"Name"},{attr:"price",label:"Price",view:"currency"},{view:"decrement",label:!1,text:" - "},{attr:"quantity",label:"Qty"},{view:"increment",label:!1,text:" +"},{view:"remove",text:"Remove",label:!1}]}),window.monetateQ=window.monetateQ||[],window.monetateQ.push(["setPageType","HomePage"]),window.monetateQ.push(["trackData"])}),Pusher.logToConsole=!0;var pusher=new Pusher("{{realtime.key}}",{cluster:"{{realtime.cluster}}",forceTLS:!0}),channel=pusher.subscribe("{{realtime.channel}}");channel.bind("{{realtime.event}}",function(){location.reload()});