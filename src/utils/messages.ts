const messages = {
    // alternatives
    'alternatives.all': '{{#label}} não corresponde a todos os tipos necessários',
    'alternatives.any': '{{#label}} não corresponde a nenhum dos tipos permitidos',
    'alternatives.match': '{{#label}} não corresponde a nenhum dos tipos permitidos',
    'alternatives.one': '{{#label}} corresponde a mais de um tipo permitido',
    'alternatives.types': '{{#label}} deve ser um dos {{#types}}',
  
    // any
    'any.custom': '{{#label}} falhou na validação personalizada porque {{#error.message}}',
    'any.default': '{{#label}} gerou um erro ao executar o método padrão',
    'any.failover': '{{#label}} gerou um erro ao executar o método de failover',
    'any.invalid': '{{#label}} contém um valor inválido',
    'any.only': '{{#label}} deve ser {if(#valids.length == 1, "", "um de ")}{{#valids}}',
    'any.ref': '{{#label}} {{#arg}} referências {{:#ref}} que {{#reason}}',
    'any.required': '{{#label}} é obrigatório',
    'any.unknown': '{{#label}} não é permitido',
  
    // array
    'array.base': '{{#label}} deve ser uma lista',
    'array.excludes': '{{#label}} contém um valor excluído',
    'array.hasKnown': '{{#label}} não contém pelo menos uma correspondência necessária para o tipo {:#patternLabel}',
    'array.hasUnknown': '{{#label}} não contém pelo menos uma correspondência necessária',
    'array.includes': '{{#label}} não corresponde a nenhum dos tipos permitidos',
    'array.includesRequiredBoth': '{{#label}} não contém {{#knownMisses}} e {{#unknownMisses}} outro(s) valor(es) obrigatório(s)',
    'array.includesRequiredKnowns': '{{#label}} não contém {{#knownMisses}}',
    'array.includesRequiredUnknowns': '{{#label}} não contém {{#unknownMisses}} valor(es) obrigatório(s)',
    'array.length': '{{#label}} deve conter {{#limit}} itens',
    'array.max': '{{#label}} deve conter menos ou igual a {{#limit}} itens',
    'array.min': '{{#label}} deve conter pelo menos {{#limit}} itens',
    'array.orderedLength': '{{#label}} deve conter no máximo {{#limit}} itens',
    'array.sort': '{{#label}} deve ser classificado em {#order} ordem por {{#by}}',
    'array.sort.mismatching': '{{#label}} não pode ser classificado devido a tipos incompatíveis',
    'array.sort.unsupported': '{{#label}} não pode ser classificado devido ao tipo não suportado {#type}',
    'array.sparse': '{{#label}} não deve ser um item de lista esparso',
    'array.unique': '{{#label}} contém um valor duplicado',
  
    // binary
    'binary.base': '{{#label}} deve ser um buffer ou uma string',
    'binary.length': '{{#label}} deve ter {{#limit}} bytes',
    'binary.max': '{{#label}} deve ser menor ou igual a {{#limit}} bytes',
    'binary.min': '{{#label}} deve ter pelo menos {{#limit}} bytes',
  
    // boolean
    'boolean.base': '{{#label}} deve ser um booleano',
  
    // date
    'date.base': '{{#label}} deve ser uma data válida',
    'date.format': '{{#label}} deve estar em {msg("date.format." + #format) || #format} formato',
    'date.greater': '{{#label}} deve ser maior que {{:#limit}}',
    'date.less': '{{#label}} deve ser menor que {{:#limit}}',
    'date.max': '{{#label}} deve ser menor ou igual a {{:#limit}}',
    'date.min': '{{#label}} deve ser maior ou igual a {{:#limit}}',
  
    // date.format
    'date.format.iso': 'Data ISO 8601',
    'date.format.javascript': 'timestamp ou número de milissegundos',
    'date.format.unix': 'timestamp ou número de segundos',
  
    // function
    'function.arity': '{{#label}} deve ter uma aridade de {{#n}}',
    'function.class': '{{#label}} must be a class',
    'function.maxArity': '{{#label}} deve ter uma aridade menor ou igual a {{#n}}',
    'function.minArity': '{{#label}} deve ter uma aridade maior ou igual a {{#n}}',
  
    // object
    'object.and': '{{#label}} contém {{#presentWithLabels}} sem seus pares necessários {{#missingWithLabels}}',
    'object.assert':
      '{{#label}} é inválido porque {if(#subject.key, `"` + #subject.key + `" falhou em ` + (#message || "passar no teste de asserção"), #message || "a afirmação falhou")}',
    'object.base': '{{#label}} deve ser do tipo {{#type}}',
    'object.instance': '{{#label}} deve ser uma instância de {{:#type}}',
    'object.length': '{{#label}} deve ter {{#limit}} chave {if (#limit == 1, "", "s")}',
    'object.max': '{{#label}} deve ter menor ou igual a {{#limit}} chave {if (#limit == 1, "", "s")}',
    'object.min': '{{#label}} deve ter pelo menos {{#limit}} chave {if (#limit == 1, "", "s")}',
    'object.missing': '{{#label}} deve conter pelo menos um dos {{#peersWithLabels}}',
    'object.nand': '{{:#mainWithLabel}} não deve existir simultaneamente com {{#peersWithLabels}}',
    'object.oxor': '{{#label}} contém um conflito entre pares exclusivos opcionais {{#peersWithLabels}}',
    'object.pattern.match': '{{#label}} chaves não atendem aos requisitos do padrão',
    'object.refType': '{{#label}} deve ser uma referência Joi',
    'object.regex': '{{#label}} deve ser um objeto RegExp',
    'object.rename.multiple':
      '{{#label}} não pode renomear {{:#from}} porque várias renomeações estão desabilitadas e outra chave já foi renomeada para {{:#to}}',
    'object.rename.override': '{{#label}} não pode renomear {{:#from}} porque a substituição está desabilitada e o destino {{:#to}} existe',
    'object.schema': '{{#label}} deve ser um esquema Joi do tipo {{#type}}',
    'object.unknown': '{{#label}} não é permitido',
    'object.with': '{{:#mainWithLabel}} par obrigatório ausente {{:#peerWithLabel}}',
    'object.without': '{{:#mainWithLabel}} conflita com o par proibido {{:#peerWithLabel}}',
    'object.xor': '{{#label}} contém um conflito entre pares exclusivos {{#peersWithLabels}}',
  
    // number
    'number.base': '{{#label}} deve ser um número',
    'number.greater': '{{#label}} deve ser maior que {{#limit}}',
    'number.infinity': '{{#label}} não pode ser infinito',
    'number.integer': '{{#label}} deve ser um inteiro',
    'number.less': '{{#label}} deve ser menor que {{#limit}}',
    'number.max': '{{#label}} deve ser menor ou igual a {{#limit}}',
    'number.min': '{{#label}} deve ser maior ou igual a {{#limit}}',
    'number.multiple': '{{#label}} deve ser um múltiplo de {{#multiple}}',
    'number.negative': '{{#label}} deve ser um número negativo',
    'number.port': '{{#label}} deve ser uma porta válida',
    'number.positive': '{{#label}} deve ser um número positivo',
    'number.precision': '{{#label}} não deve ter mais do que {{#limit}} casas decimais',
    'number.unsafe': '{{#label}} deve ser um número seguro',
  
    // string
    'string.alphanum': '{{#label}} deve conter apenas caracteres alfanuméricos',
    'string.base': '{{#label}} deve ser uma string',
    'string.base64': '{{#label}} deve ser uma string base64 válida',
    'string.creditCard': '{{#label}} deve ser um cartão de crédito',
    'string.dataUri': '{{#label}} deve ser uma string dataUri válida',
    'string.domain': '{{#label}} deve conter um nome de domínio válido',
    'string.email': '{{#label}} deve ser um e-mail válido',
    'string.empty': '{{#label}} não pode ficar vazio',
    'string.guid': '{{#label}} deve ser um GUID válido',
    'string.hex': '{{#label}} deve conter apenas caracteres hexadecimais',
    'string.hexAlign': '{{#label}} a representação decodificada hexadecimal deve ser alinhada por byte',
    'string.hostname': '{{#label}} deve ser um nome de host válido',
    'string.ip': '{{#label}} deve ser um endereço IP válido com um {{#cidr}} CIDR',
    'string.ipVersion': '{{#label}} deve ser um endereço IP válido de uma das seguintes versões {{#version}} com um {{#cidr}} CIDR',
    'string.isoDate': '{{#label}} deve estar no formato iso',
    'string.isoDuration': '{{#label}} deve ter uma duração ISO 8601 válida',
    'string.length': '{{#label}} o comprimento deve ter {{#limit}} caracteres',
    'string.lowercase': '{{#label}} deve conter apenas caracteres minúsculos',
    'string.max': '{{#label}} comprimento deve ser menor ou igual a {{#limit}} caracteres de comprimento',
    'string.min': '{{#label}} o comprimento deve ter pelo menos {{#limit}} caracteres',
    'string.normalize': '{{#label}} deve ser unicode normalizado na forma {{#form}}',
    'string.token': '{{#label}} deve conter apenas caracteres alfanuméricos e sublinhados',
    'string.pattern.base': '{{#label}} com valor {:[.]} não corresponde ao padrão exigido: {{#regex}}',
    'string.pattern.name': '{{#label}} com valor {:[.]} não corresponde ao padrão {{#name}}',
    'string.pattern.invert.base': '{{#label}} com valor {:[.]} corresponde ao padrão invertido: {{#regex}}',
    'string.pattern.invert.name': '{{#label}} com valor {:[.]} corresponde ao padrão {{#name}} invertido',
    'string.trim': '{{#label}} não deve ter espaços em branco à esquerda ou à direita',
    'string.uri': '{{#label}} deve ser um uri válido',
    'string.uriCustomScheme': '{{#label}} deve ser um uri válido com um esquema que corresponda ao padrão {{#scheme}}',
    'string.uriRelativeOnly': '{{#label}} deve ser um uri relativo válido',
    'string.uppercase': '{{#label}} deve conter apenas caracteres maiúsculos',
  
    // symbol
    'symbol.base': '{{#label}} deve ser um símbolo',
    'symbol.map': '{{#label}} deve ser um dos {{#map}}',
  };
  
  export default messages;