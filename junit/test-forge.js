var forge = require('node-forge');
var fs = require('fs');

const PATH = "local/FC1115323-966B94.p12"
const PASSWORD = '966B94'

const test = () =>{
  const keyBase64 = readPKCS12(PATH)
  const p12 = convertToForgeP12(keyBase64, PASSWORD)
  const cert = getCert(p12) 
  const privateKey = getPrivateKey(p12) 

  console.log(SignData(privateKey, cert, "1") == SignData(privateKey, cert, "1")) 
}

const readPKCS12 = (path) => {
  let keyFile = fs.readFileSync(path);

  let str = ''
  for(let i = 0; i < keyFile.length; i++) {
    const str1 =  ('0' + keyFile[i].toString(16).toUpperCase()).slice(-2)
    str += str1
  }
  console.log(str)
  let keyBase64 = keyFile.toString('base64');
  return keyBase64
}

const convertToForgeP12 = (keyBase64, password) => {
  let p12Der = forge.util.decode64(keyBase64); 
  let p12Asn1 = forge.asn1.fromDer(p12Der); 
  let p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1,password);
  return p12
}

const getCert = (p12) => {
  let certBag = p12.getBags({bagType: forge.pki.oids.certBag}); 
  let certs = certBag[forge.pki.oids.certBag][0]; 
  const cert = certs.cert
  return  cert 
} 
  
const getPrivateKey = (p12) =>{
  var keyBags = p12.getBags({bagType: forge.pki.oids.pkcs8ShroudedKeyBag});
  var bag = keyBags[forge.pki.oids.pkcs8ShroudedKeyBag][0];
  var privateKey = bag.key;
  return privateKey
}
getThumbprint = (cert) => {
  var certAsn1 = forge.pki.certificateToAsn1(cert); 
  var certDer = forge.asn1.toDer(certAsn1).getBytes();
  //SHA-1 on certificate binary data 
  var md = forge.md.sha1.create(); 
  md.start(); 
  md.update(certDer); 
  var digest = md.digest(); 
  //print as HEX 
  var thumbprint = digest.toHex(); 
  return thumbprint
}
const SignData = (privateKey, cert, content) => {
  var p7 = forge.pkcs7.createSignedData();
  p7.content = forge.util.createBuffer(content);
  p7.addCertificate(cert);
  p7.addSigner({
    key: privateKey,
    certificate: cert,
    digestAlgorithm: forge.pki.oids.sha256,
    authenticatedAttributes: []
  }); 
  p7.sign({detached: false});

  var pem = forge.pkcs7.messageToPem(p7);
  var pemMessagep7 = forge.pkcs7.messageToPem(p7);

  pemMessagep7 = pemMessagep7.substr( pemMessagep7.indexOf('\n') );

  pemMessagep7 = pemMessagep7.substr( 0, pemMessagep7.indexOf('-----END PKCS7----') );
  return pemMessagep7
} 

// SignData("1")
test()
 
// MIIHkAYJKoZIhvcNAQcCoIIHgTCCB30CAQExCzAJBgUrDgMCGgUAMBEGCSqGSIb3\r\nDQEHAaAEBAIxAKCCBhgwggYUMIIE/KADAgECAgoz4J5kAAAABF/7MA0GCSqGSIb3\r\nDQEBBQUAMIGEMScwJQYJKoZIhvcNAQkBFhhpdGVjLXNlcnZpY2VAZm94Y29ubi5j\r\nb20xCzAJBgNVBAYTAkNOMRIwEAYDVQQIEwlHVUFOR0RPTkcxETAPBgNVBAcTCFNI\r\nRU5aSEVOMRAwDgYDVQQKEwdGT1hDT05OMRMwEQYDVQQDEwpGb3hjb25uIENBMB4X\r\nDTE4MDYwNTA4MDkzM1oXDTIwMDYwNTA4MTkzM1owgbMxCzAJBgNVBAYTAkNOMRIw\r\nEAYDVQQIEwlGQzExMTUzMjMxEzARBgNVBAcTClNaLjExMTY4MTExEDAOBgNVBAoT\r\nB0ZveGNvbm4xKTAnBgNVBAsMIFdMQkct5oeJ55So57O757Wx5pW05ZCI6ZaL55m8\r\n6YOoMRIwEAYDVQQDDAnmnLHlhKroia8xKjAoBgkqhkiG9w0BCQEWG2RlZi55bC56\r\naHVAbWFpbC5mb3hjb25uLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA\r\nztOYkuEYj5AZsMHlRrwxwroYhS53ggWdYbdjfRj60ehUXy0zLLp9BKsGLSDwY/7w\r\nUYXFem5s1DbaA9Rx2z3apFP3W2eoRWiaN6HzFHyE4HMmVawgz28OamWTfW55o/Us\r\nQs4WJY1eYemexPCYMDHVhDW7hA9kFhw9EYnfbPH7uOcCAwEAAaOCAtkwggLVMA4G\r\nA1UdDwEB/wQEAwIE8DBEBgkqhkiG9w0BCQ8ENzA1MA4GCCqGSIb3DQMCAgIAgDAO\r\nBggqhkiG9w0DBAICAIAwBwYFKw4DAgcwCgYIKoZIhvcNAwcwEwYDVR0lBAwwCgYI\r\nKwYBBQUHAwIwHQYDVR0OBBYEFJZ39+leUL/zOm7VudvjXu/VNcIuMB8GA1UdIwQY\r\nMBaAFPxxAk6oem052OUneRtsRBt9NWPpMIIBAAYDVR0fBIH4MIH1MIHyoIHvoIHs\r\nhoG2bGRhcDovLy9DTj1Gb3hjb25uJTIwQ0EsQ049c3pjYTAxLENOPUNEUCxDTj1Q\r\ndWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0\r\naW9uLERDPWlwLWluLWhvdXNlLERDPWNvbT9jZXJ0aWZpY2F0ZVJldm9jYXRpb25M\r\naXN0P2Jhc2U/b2JqZWN0Q2xhc3M9Y1JMRGlzdHJpYnV0aW9uUG9pbnSGMWh0dHA6\r\nLy9jYS5mb3hjb25uLmNvbS9DZXJ0RW5yb2xsL0ZveGNvbm4lMjBDQS5jcmwwggEi\r\nBggrBgEFBQcBAQSCARQwggEQMIGvBggrBgEFBQcwAoaBomxkYXA6Ly8vQ049Rm94\r\nY29ubiUyMENBLENOPUFJQSxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1T\r\nZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPWlwLWluLWhvdXNlLERDPWNvbT9j\r\nQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlvbkF1dGhv\r\ncml0eTBcBggrBgEFBQcwAoZQaHR0cDovL3N6Y2EwMS5pcC1pbi1ob3VzZS5jb20v\r\nQ2VydEVucm9sbC9zemNhMDEuaXAtaW4taG91c2UuY29tX0ZveGNvbm4lMjBDQS5j\r\ncnQwDQYJKoZIhvcNAQEFBQADggEBAA4kE8xNvscWh75JAqj7cRaL4CTsZuBhA80d\r\nUn3SofG7A7NNbZSksmtL3PJrSfkdBmsf6viXxdHpX/akErpmu+zcaBTgHCNy669N\r\n7g+qzi7mUTUzuTfusj1JsIfVMEolU6nogTsE5KU30BOlVSSUv7Yg+k4rxDA0Q9Jz\r\n3CyAALgVAfwj0VwVJ+Is2vlWgI01eiQudcug+LoiZVaLypwV3IoqPZPnDlmCzsv4\r\naVwBCEm3Vk/0BQaAIFHbnbMNpjAnSkf6J1Y84q/GM6h64zgzPkcPcWh8eMPQIg2f\r\nj4HV7U3kiKTasZJd9K4Y7VV81QyGdRto/siTH2qDkcZJkiFwxiQxggE6MIIBNgIB\r\nATCBkzCBhDEnMCUGCSqGSIb3DQEJARYYaXRlYy1zZXJ2aWNlQGZveGNvbm4uY29t\r\nMQswCQYDVQQGEwJDTjESMBAGA1UECBMJR1VBTkdET05HMREwDwYDVQQHEwhTSEVO\r\nWkhFTjEQMA4GA1UEChMHRk9YQ09OTjETMBEGA1UEAxMKRm94Y29ubiBDQQIKM+Ce\r\nZAAAAARf+zAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIGAX3GeGLPUi9jrf/Kl\r\ncg29JOSwmHXTjLiK7L0VIrh5Epcq5txYcy6od5env7Mm51JGJqy3lLJkLNsMFrNy\r\nic23ZB9EizL6URKDpVUlJ/V1Cv8C4x+1Nf0oxKCn7COYvRBZ6fxUYEDAvNOJnRAh\r\nPVe8bhf3tYEK/B5xuJpuxXmPFIw=\r\n

// "MIIHkAYJKoZIhvcNAQcCoIIHgTCCB30CAQExCzAJBgUrDgMCGgUAMBEGCSqGSIb3\r\nDQEHAaAEBAIxAKCCBhgwggYUMIIE/KADAgECAgoz4J5kAAAABF/7MA0GCSqGSIb3\r\nDQEBBQUAMIGEMScwJQYJKoZIhvcNAQkBFhhpdGVjLXNlcnZpY2VAZm94Y29ubi5j\r\nb20xCzAJBgNVBAYTAkNOMRIwEAYDVQQIEwlHVUFOR0RPTkcxETAPBgNVBAcTCFNI\r\nRU5aSEVOMRAwDgYDVQQKEwdGT1hDT05OMRMwEQYDVQQDEwpGb3hjb25uIENBMB4X\r\nDTE4MDYwNTA4MDkzM1oXDTIwMDYwNTA4MTkzM1owgbMxCzAJBgNVBAYTAkNOMRIw\r\nEAYDVQQIEwlGQzExMTUzMjMxEzARBgNVBAcTClNaLjExMTY4MTExEDAOBgNVBAoT\r\nB0ZveGNvbm4xKTAnBgNVBAsMIFdMQkct5oeJ55So57O757Wx5pW05ZCI6ZaL55m8\r\n6YOoMRIwEAYDVQQDDAnmnLHlhKroia8xKjAoBgkqhkiG9w0BCQEWG2RlZi55bC56\r\naHVAbWFpbC5mb3hjb25uLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA\r\nztOYkuEYj5AZsMHlRrwxwroYhS53ggWdYbdjfRj60ehUXy0zLLp9BKsGLSDwY/7w\r\nUYXFem5s1DbaA9Rx2z3apFP3W2eoRWiaN6HzFHyE4HMmVawgz28OamWTfW55o/Us\r\nQs4WJY1eYemexPCYMDHVhDW7hA9kFhw9EYnfbPH7uOcCAwEAAaOCAtkwggLVMA4G\r\nA1UdDwEB/wQEAwIE8DBEBgkqhkiG9w0BCQ8ENzA1MA4GCCqGSIb3DQMCAgIAgDAO\r\nBggqhkiG9w0DBAICAIAwBwYFKw4DAgcwCgYIKoZIhvcNAwcwEwYDVR0lBAwwCgYI\r\nKwYBBQUHAwIwHQYDVR0OBBYEFJZ39+leUL/zOm7VudvjXu/VNcIuMB8GA1UdIwQY\r\nMBaAFPxxAk6oem052OUneRtsRBt9NWPpMIIBAAYDVR0fBIH4MIH1MIHyoIHvoIHs\r\nhoG2bGRhcDovLy9DTj1Gb3hjb25uJTIwQ0EsQ049c3pjYTAxLENOPUNEUCxDTj1Q\r\ndWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0\r\naW9uLERDPWlwLWluLWhvdXNlLERDPWNvbT9jZXJ0aWZpY2F0ZVJldm9jYXRpb25M\r\naXN0P2Jhc2U/b2JqZWN0Q2xhc3M9Y1JMRGlzdHJpYnV0aW9uUG9pbnSGMWh0dHA6\r\nLy9jYS5mb3hjb25uLmNvbS9DZXJ0RW5yb2xsL0ZveGNvbm4lMjBDQS5jcmwwggEi\r\nBggrBgEFBQcBAQSCARQwggEQMIGvBggrBgEFBQcwAoaBomxkYXA6Ly8vQ049Rm94\r\nY29ubiUyMENBLENOPUFJQSxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1T\r\nZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPWlwLWluLWhvdXNlLERDPWNvbT9j\r\nQUNlcnRpZmljYXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlvbkF1dGhv\r\ncml0eTBcBggrBgEFBQcwAoZQaHR0cDovL3N6Y2EwMS5pcC1pbi1ob3VzZS5jb20v\r\nQ2VydEVucm9sbC9zemNhMDEuaXAtaW4taG91c2UuY29tX0ZveGNvbm4lMjBDQS5j\r\ncnQwDQYJKoZIhvcNAQEFBQADggEBAA4kE8xNvscWh75JAqj7cRaL4CTsZuBhA80d\r\nUn3SofG7A7NNbZSksmtL3PJrSfkdBmsf6viXxdHpX/akErpmu+zcaBTgHCNy669N\r\n7g+qzi7mUTUzuTfusj1JsIfVMEolU6nogTsE5KU30BOlVSSUv7Yg+k4rxDA0Q9Jz\r\n3CyAALgVAfwj0VwVJ+Is2vlWgI01eiQudcug+LoiZVaLypwV3IoqPZPnDlmCzsv4\r\naVwBCEm3Vk/0BQaAIFHbnbMNpjAnSkf6J1Y84q/GM6h64zgzPkcPcWh8eMPQIg2f\r\nj4HV7U3kiKTasZJd9K4Y7VV81QyGdRto/siTH2qDkcZJkiFwxiQxggE6MIIBNgIB\r\nATCBkzCBhDEnMCUGCSqGSIb3DQEJARYYaXRlYy1zZXJ2aWNlQGZveGNvbm4uY29t\r\nMQswCQYDVQQGEwJDTjESMBAGA1UECBMJR1VBTkdET05HMREwDwYDVQQHEwhTSEVO\r\nWkhFTjEQMA4GA1UEChMHRk9YQ09OTjETMBEGA1UEAxMKRm94Y29ubiBDQQIKM+Ce\r\nZAAAAARf+zAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIGAX3GeGLPUi9jrf/Kl\r\ncg29JOSwmHXTjLiK7L0VIrh5Epcq5txYcy6od5env7Mm51JGJqy3lLJkLNsMFrNy\r\nic23ZB9EizL6URKDpVUlJ/V1Cv8C4x+1Nf0oxKCn7COYvRBZ6fxUYEDAvNOJnRAh\r\nPVe8bhf3tYEK/B5xuJpuxXmPFIw=\r\n"
// 60E909D047DDB1EB3B724B5F7B7CB0ACFE297CED

// 60E909D047DDB1EB3B724B5F7B7CB0ACFE297CED

