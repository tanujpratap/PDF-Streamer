const translate=require('@vitalets/google-translate-api')
const targetLanguages=['hi','es','fr']
module.exports.translateMetaData=async(title,Descryption)=>{
const translations={};
for(const lang of targetLanguages){
    const translatedTitle=await translate(title,{to:lang})
      const translatedDesc=await translate(descryption,{to:lang})
      translations[lang]={
        title:translatedTitle.text,
        descryption:translatedDesc.text
      }
}
return translations
}
