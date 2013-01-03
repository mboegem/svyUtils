/*
 * Scope with base exceptions.
 * 
 * Note: when adding new exceptions, also set the prototype accordingly through the init function
 */

/**
 * General exception holding exception message, i18n key and arguments
 * 
 * Subclassed by specific exceptions
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * 
 * @constructor 
 *
 * @properties={typeid:24,uuid:"8D4DBBD3-4162-4F23-A61E-5875936E8AAB"}
 */
function SvyException(errorMessage, i18nKey, i18nArguments) {
	
	var message = errorMessage;
	
	var localeMessage = i18nKey ? (i18nArguments ? i18n.getI18NMessage(i18nKey, i18nArguments) : i18n.getI18NMessage(i18nKey)) : errorMessage;
	
	/**
	 * Returns the exception message
	 * 
	 * @return {String}
	 */
	this.getMessage = function() {
		return message;
	}
	
	/**
	 * Returns the i18n translated exception message
	 * 
	 * @return {String}
	 */
	this.getLocaleMessage = function() {
		return localeMessage;
	}
	
	/**
	 * Returns the i18n translated message if an i18n<br>
	 * key was provided, errorMessage if not
	 * 
	 * @override
	 */
	this.toString = function(){
		return localeMessage;
	}
	
	Object.defineProperty(this, "message", {
		get: function() {
			return message;
		},
		set: function(x) {
		}
	});
	
	Object.defineProperty(this, "localeMessage", {
		get: function() {
			return localeMessage;
		},
		set: function(x) {
		}
	});	
}

/**
 * No record present
 * 
 * @constructor 
 * 
 * @properties={typeid:24,uuid:"3FB6A57B-817A-412F-ABCF-5B35057E27EB"}
 */
function NoRecordException() {
	
}

/**
 * No related record present
 * 
 * @constructor
 * 
 * @properties={typeid:24,uuid:"99684648-AB5F-404D-918D-A45FC36270BD"}
 */
function NoRelatedRecordException() {
	
}

/**
 * Thrown when an email message could not be sent
 * 
 * @param {String} [lastSendMailExceptionMessage] - usually taken from plugins.mail.getLastSendMailExceptionMsg()
 * 
 * @constructor 
 * 
 * @properties={typeid:24,uuid:"73C704EB-7D7D-4B4B-AD05-88068C478184"}
 */
function SendMailException(lastSendMailExceptionMessage)
{
	if (lastSendMailExceptionMessage) {
		scopes.modUtils$exceptions.SvyException.call(this, lastSendMailExceptionMessage);
	}
}

/**
 * The given file could not be found
 * 
 * @param {plugins.file.JSFile} [file]
 * 
 * @constructor 
 *
 * @properties={typeid:24,uuid:"F452FF14-FB87-4A1B-936D-EBC9DD13D61E"}
 */
function FileNotFoundException(file) {
	
	/**
	 * The file that could not be found
	 * @type {plugins.file.JSFile}
	 */
	this.file = file;
	
}

/**
 * Raised when an argument is not legal
 *
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 *
 * @constructor
 *
 * @author Sean
 *
 * @properties={typeid:24,uuid:"8E3EBB8D-1397-4444-8E0C-3F9D3E036CC7"}
 */
function IllegalArgumentException(errorMessage, i18nKey, i18nArguments) {
	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Raised when performing an operation that is not supported
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * 
 * @constructor 
 * 
 * @properties={typeid:24,uuid:"4B19C306-E4D7-40F2-BE89-DF369F489094"}
 */
function UnsupportedOperationException(errorMessage, i18nKey, i18nArguments){
	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Raised when a runtime state is not legal
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * 
 * @constructor 
 * 
 * @author Sean
 * 
 * @properties={typeid:24,uuid:"04C9606C-70C0-4C03-854F-7BE2B09FF44C"}
 */
function IllegalStateException(errorMessage, i18nKey, i18nArguments){
	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Raised when JSFoundSet.newRecord() failed
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * @param {JSFoundSet} [foundset]
 * 
 * @constructor 
 * 
 * @author Sean
 * 
 * @properties={typeid:24,uuid:"F169D722-2B2F-41F5-87CF-EA7EF58ADD65"}
 */
function NewRecordFailedException(errorMessage, i18nKey, i18nArguments, foundset) {
	
	/**
	 * The Foundset that was used to attempt record creation
	 *  
	 * @type {JSFoundSet}
	 */
	this.foundset = foundset;

	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Raised when JSFoundSet.find() fails
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * @param {JSFoundSet} [foundset]
 * 
 * @constructor 
 * 
 * @author Sean
 * 
 * @properties={typeid:24,uuid:"530D13F3-440F-4059-B00A-96D3689C92EB"}
 */
function FindModeFailedException(errorMessage, i18nKey, i18nArguments, foundset){
	
	/**
	 * The Foundset that was used to attempt to enter find mode
	 * @type {JSFoundSet} 
	 */
	this.foundset = foundset;
	
	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Raised when databaseManager.saveData() fails
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * @param {JSFoundSet|JSRecord} [foundsetOrRecord] saves can be on anything (null), foundset, or record
 * 
 * @constructor 
 * 
 * @author Sean
 *
 * @properties={typeid:24,uuid:"4B09EF6B-D100-4BF1-B90B-00BD4D9F814B"}
 */
function SaveDataFailedException(errorMessage, i18nKey, i18nArguments, foundsetOrRecord){
	
	/**
	 * The Foundset that was used to attempt record creation
	 * @type {JSFoundSet} 
	 */
	this.foundsetOrRecord = foundsetOrRecord;
	
	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Raised when a delete fails
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * @param {JSFoundSet|JSRecord} [foundsetOrRecord] saves can be on anything (null), foundset, or record
 * 
 * @constructor 
 * 
 * @author Sean
 *
 * @properties={typeid:24,uuid:"0325165D-2736-4BAE-BE13-F3FE685A98D1"}
 */
function DeleteRecordFailedException(errorMessage, i18nKey, i18nArguments, foundsetOrRecord){
	
	/**
	 * The Foundset that was used to attempt record creation
	 * @type {JSFoundSet} 
	 */
	this.foundsetOrRecord = foundsetOrRecord;
	
	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Raised when the dataprovider needs to be unique
 * 
 * @param {JSRecord} record
 * @param {String} dataprovider
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * 
 * @constructor 
 * 
 * @author patrick
 * @since 30.09.2012
 *
 * @properties={typeid:24,uuid:"B855809D-DE16-4398-B2C3-0D2324E33FE5"}
 */
function ValueNotUniqueException(record, dataprovider, i18nKey, i18nArguments) {

	/**
	 * The record that violates a unique constraint
	 * @type {JSRecord}
	 */
	this.record = record;
	
	/**
	 * The dataprovider that is not unique
	 * @type {String}
	 */
	this.dataprovider = dataprovider;
	
	scopes.modUtils$exceptions.SvyException.call(this, "Value not unique for: " + dataprovider, i18nKey, i18nArguments);
	
}

/**
 * Raised when a there is an error in an HTTP operation, most commonly a failed request (status code != SC_OK)
 * 
 * @param {String} errorMessage
 * @param {String} [i18nKey]
 * @param {Array} [i18nArguments]
 * @param {Number} [httpCode]
 * @param {String} [httpResponseBody]
 * 
 * @constructor 
 * 
 * @author Sean
 *
 * @properties={typeid:24,uuid:"81CF0FE3-F3C4-4203-B934-6936C37BED65"}
 */
function HTTPException(errorMessage, i18nKey, i18nArguments, httpCode, httpResponseBody) {

	/**
	 * The HTTP Response Code
	 * @type {Number}
	 */
	this.httpCode = httpCode;

	/**
	 * The Response of the
	 * @type {String}
	 */
	this.httpResponseBody = httpResponseBody;

	scopes.modUtils$exceptions.SvyException.call(this, errorMessage, i18nKey, i18nArguments);
}

/**
 * Set all prototypes to super class
 * 
 * @protected  
 * 
 * @properties={typeid:35,uuid:"36364157-A05A-4806-B13E-DA08DD8C27D6",variableType:-4}
 */
var init = function() {
	NoRecordException.prototype = 				new SvyException("No record was given or the foundset is empty");
	NoRelatedRecordException.prototype = 		new SvyException("No related record found");
	SendMailException.prototype = 				new SvyException("Failed to send mail");
	FileNotFoundException.prototype = 			new SvyException("File not found");
	IllegalArgumentException.prototype = 		new SvyException("Illegal argument");
	IllegalStateException.prototype = 			new SvyException("Illegal state");
	UnsupportedOperationException.prototype = 	new SvyException("Unsupported operation");
	NewRecordFailedException.prototype = 		new SvyException("Failed to create new record");
	FindModeFailedException.prototype = 		new SvyException("Failed to enter find mode");
	SaveDataFailedException.prototype = 		new SvyException("Failed to save data");
	DeleteRecordFailedException.prototype = 	new SvyException("Failed to delete data");
	ValueNotUniqueException.prototype = 		new SvyException("Value not unique");
	HTTPException.prototype = 					new SvyException("Error in HTTP operation");
}()