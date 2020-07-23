var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.post('/testpost', function(req, res, next) {
  let sample = `
  <?xml version="1.0" encoding="ISO-8859-1"?>
<DOCUMENTOS>
    <ROOT Valor="Documentos de Test"/>
    <GENERAL/>
    <CONSULTA>
        <PARAMETROS Aplicacion="FACTURAS" />
        <LISTA>
            <BOOKMARK nivel="1" valor="9713488">
                <BOOKMARK nivel="2" valor="NOTIFICACIÓN DE FACTURA">
                    <BOOKMARK nivel="3" valor="12/3/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/3/2018 12:00:00 AM" C82="NOTIFICACIÓN DE FACTURA" C83="N1018054779" C84="3493239" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="443051bc-f7c7-47a4-95d4-230a1a7dcc75"/>
                    </BOOKMARK>
                    <BOOKMARK nivel="3" valor="12/21/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/21/2018 12:00:00 AM" C82="NOTIFICACIÓN DE FACTURA" C83="N1018055199" C84="3404979" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="3a8ae7f4-69f0-422c-9efd-59a06512589b"/>
                    </BOOKMARK>
                    <BOOKMARK nivel="3" valor="12/28/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/28/2018 12:00:00 AM" C82="NOTIFICACIÓN DE FACTURA" C83="N1018055221" C84="3439153" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="3cec7949-6bd7-4b01-834d-e486f0bc1d5c"/>
                    </BOOKMARK>
                </BOOKMARK>
                <BOOKMARK nivel="2" valor="NOTIFICACIÓN DE ABONO">
                    <BOOKMARK nivel="3" valor="12/31/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/31/2018 12:00:00 AM" C82="NOTIFICACIÓN DE ABONO" C83="N2018029783" C84="3404926" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="6b64000e-5419-452e-afad-9f0cbce5ced6"/>
                        <DOCUMENTO C79="9713488" C80="" C81="12/31/2018 12:00:00 AM" C82="NOTIFICACIÓN DE ABONO" C83="N2018029783" C84="3439148" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="6b64000e-5419-452e-afad-9f0cbce5ced6"/>
                    </BOOKMARK>
                </BOOKMARK>
                <BOOKMARK nivel="2" valor="FACTURA DE CARGO">
                    <BOOKMARK nivel="3" valor="12/3/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/3/2018 12:00:00 AM" C82="FACTURA DE CARGO" C83="1018054779" C84="3493239" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="4ab5aad4-f818-46e4-8fe6-393a87780e59"/>
                    </BOOKMARK>
                    <BOOKMARK nivel="3" valor="12/21/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/21/2018 12:00:00 AM" C82="FACTURA DE CARGO" C83="1018055199" C84="3404979" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="f1cb6a95-0405-4e24-a476-90192e483366"/>
                    </BOOKMARK>
                    <BOOKMARK nivel="3" valor="12/28/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/28/2018 12:00:00 AM" C82="FACTURA DE CARGO" C83="1018055221" C84="3439153" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="92fa4125-be27-41bb-91ca-808aa983f355"/>
                    </BOOKMARK>
                </BOOKMARK>
                <BOOKMARK nivel="2" valor="FACTURA DE ABONO">
                    <BOOKMARK nivel="3" valor="12/31/2018 12:00:00 AM">
                        <DOCUMENTO C79="9713488" C80="" C81="12/31/2018 12:00:00 AM" C82="FACTURA DE ABONO" C83="2018029783" C84="3404926" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="3fe70699-cd0a-48c5-9308-ee413005a208"/>
                        <DOCUMENTO C79="9713488" C80="" C81="12/31/2018 12:00:00 AM" C82="FACTURA DE ABONO" C83="2018029783" C84="3439148" C128="" C85="FACT1_ESSILOR.GIF" Id_Aplicacion="d973bb7b-33d3-4703-b6ea-a94830cc6728" Id_Registro="3fe70699-cd0a-48c5-9308-ee413005a208"/>
                    </BOOKMARK>
                </BOOKMARK>
            </BOOKMARK>
        </LISTA>
    </CONSULTA>
</DOCUMENTOS>
  `
  res.status(200).send(sample).end();
});

module.exports = router;
