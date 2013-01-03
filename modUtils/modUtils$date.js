/*
 * Date helper methods
 * 
 */

/**
 * A java.util.Calendar instance used to do the math
 * @private
 * @properties={typeid:35,uuid:"D97BF23E-75BB-4458-AC19-5B31FAF3A053",variableType:-4}
 */
var calendar = java.util.Calendar.getInstance();

/**
 * @enum
 * @final
 * @properties={typeid:35,uuid:"C2C3D6C7-F9D0-4CAB-9EE4-DD6BDF728E5D",variableType:-4}
 */
var UNITS = {
	HOUR:100,
	DAY:200,
	WEEK:300,
	MONTH:400,
	QUARTER:500,
	YEAR:600
};

/**
 * Adds the value of the given field to the given date
 * 
 * @private 
 * 
 * @param {Date} date
 * @param {Number} dateField
 * @param {Number} value
 * 
 * @return {Date}
 *
 * @properties={typeid:24,uuid:"95B13567-2AB2-4871-9573-81FD5D091D5C"}
 */
function addToDate(date, dateField, value) {
	calendar.setTimeInMillis(date.getTime());
	calendar.add(dateField, value);
	return new Date(calendar.getTimeInMillis());
}

/**
 * Adds the number of years, months, days, hours, minutes and seconds to the given date and returns a new date
 * 
 * @param {Date} date
 * @param {Number} years
 * @param {Number} months
 * @param {Number} days
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} seconds
 * 
 * @return {Date} newDate
 *
 * @properties={typeid:24,uuid:"BD51F7B3-70E4-4532-A14F-7F17111EC0D1"}
 */
function add(date, years, months, days, hours, minutes, seconds) {
	calendar.setTimeInMillis(date.getTime());	
	calendar.add(java.util.Calendar.YEAR, years);
	calendar.add(java.util.Calendar.MONTH, months);
	calendar.add(java.util.Calendar.DATE, days);
	calendar.add(java.util.Calendar.HOUR, hours);
	calendar.add(java.util.Calendar.MINUTE, minutes);
	calendar.add(java.util.Calendar.SECOND, seconds);
	return new Date(calendar.getTimeInMillis());	
}

/**
 * Transposes a date object by the amount specified and returns a new date object
 * 
 * @param {Date} date
 * @param {Number} amount
 * @param {Number} units
 * 
 * @throws {scopes.svyExceptions.IllegalArgumentException}
 * 
 * @author Sean
 *
 * @properties={typeid:24,uuid:"93BFF9E9-ADE6-4E9C-9B24-182D177A09D7"}
 */
function addUnits(date, amount, units) {
	if(!date) throw new scopes.svyExceptions.IllegalArgumentException('date cannot be null/undefined', null, null);
	if(!amount) throw new scopes.svyExceptions.IllegalArgumentException('amount cannot be null/undefined', null, null);
	if(!units) throw new scopes.svyExceptions.IllegalArgumentException('units cannot be null/undefined', null, null);
	date = new Date(date.valueOf());
	switch (units) {
		case scopes.modUtils$date.UNITS.HOUR:
			date.setHours(date.getHours() + amount);
			break;
		case scopes.modUtils$date.UNITS.DAY:
			date.setDate(date.getDate()+amount);
			break;
		case scopes.modUtils$date.UNITS.WEEK:
			date.setDate(date.getDate()+(amount*7));
			break;
		case scopes.modUtils$date.UNITS.MONTH:
			date.setMonth(date.getMonth()+amount);
			break;
		case scopes.modUtils$date.UNITS.YEAR:
			date.setFullYear(date.getFullYear()+amount);
			break;
		default:
			throw new scopes.svyExceptions.IllegalArgumentException('Unsupported value for units', null, null);
	}
	return date;
}

/**
 * Adds the given number of years to the given date and returns a new date<br>
 * Negative number of years will be substracted
 * 
 * @param {Date} date - the date to add to
 * @param {Number} years - number of years to add
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"1D38256D-18CD-4D78-84FC-BC421591BAE1"}
 */
function addYears(date, years) {
	return addToDate(date, java.util.Calendar.YEAR, years);
}

/**
 * Adds the given number of months to the given date and returns a new dat<br>
 * Negative number of months will be substracted
 * 
 * @param {Date} date - the date to add to
 * @param {Number} months - number of months to add
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"660C3569-F5FD-4D2F-AB4F-FDC4852B267B"}
 */
function addMonths(date, months) {
	return addToDate(date, java.util.Calendar.MONTH, months);
}

/**
 * Adds the given number of weeks to the given date and returns a new dat<br>
 * Negative number of weeks will be substracted
 * 
 * @param {Date} date - the date to add to
 * @param {Number} weeks - number of weeks to add
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"465AEBAA-AA0A-48F2-9B73-3510BD4F0988"}
 */
function addWeeks(date, weeks) {
	return addToDate(date, java.util.Calendar.WEEK_OF_YEAR, weeks);
}

/**
 * Adds the given number of days to the given date and returns a new dat<br>
 * Negative number of days will be substracted
 * 
 * @param {Date} date - the date to add to
 * @param {Number} days - number of days to add
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"8E119128-4846-49F8-9193-29C7637465B0"}
 */
function addDays(date, days) {
	return addToDate(date, java.util.Calendar.DATE, days);
}

/**
 * Adds the given number of hours to the given date and returns a new dat<br>
 * Negative number of hours will be substracted
 * 
 * @param {Date} date - the date to add to
 * @param {Number} hours - number of hours to add
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"DF5683B7-5B98-4425-A711-958D8CFDCAD7"}
 */
function addHours(date, hours) {
	return addToDate(date, java.util.Calendar.HOUR, hours);
}

/**
 * Adds the given number of minutes to the given date and returns a new dat<br>
 * Negative number of minutes will be substracted
 * 
 * @param {Date} date - the date to add to
 * @param {Number} minutes - number of minutes to add
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"01F102D2-3604-4016-81C1-DEAB2E5AB06D"}
 */
function addMinutes(date, minutes) {
	return addToDate(date, java.util.Calendar.MINUTE, minutes);
}

/**
 * Adds the given number of seconds to the given date and returns a new dat<br>
 * Negative number of seconds will be substracted
 * 
 * @param {Date} date - the date to add to
 * @param {Number} seconds - number of seconds to add
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"520A2683-27A9-49BE-BC10-545E489A0E5F"}
 */
function addSeconds(date, seconds) {
	return addToDate(date, java.util.Calendar.SECOND, seconds);
}

/**
 * Sets the time of the given date to 00:00:00.000
 * 
 * @param {Date} date
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"BCDB9198-AB26-4F32-AA41-126ABAE55448"}
 */
function toStartOfDay(date) {
	date.setHours(0, 0, 0, 0);
	return date;
}

/**
 * Sets the time of the given date to 00:00:00
 * 
 * @param {Date} date
 * 
 * @return {Date} result
 *
 * @properties={typeid:24,uuid:"177441D1-3D16-4948-86F8-059809A7ABF7"}
 */
function toEndOfDay(date) {
	date.setHours(23, 59, 59, 999);
	return date;
}

/**
 * Creates a from - to search String for the two dates<br>
 * 
 * The range starts at the given start date at 00:00:00 and<br>
 * ends at the given end date at 23:59:59<br>
 * 
 * @see createDateTimeSearchString(start,end) if exact datetime search is needed
 * 
 * @param {Date} start
 * @param {Date} end
 * 
 * @return {String} searchString
 *
 * @properties={typeid:24,uuid:"562F907F-FF35-4328-A138-B36953D8407C"}
 */
function createDateSearchString(start, end) {
	start.setHours(0, 0, 0, 0);
	end.setHours(23, 59, 59, 999);
	var pattern = "yyyy-MM-dd HH:mm:ss";
	var fromString = utils.dateFormat(start, pattern);
	var toString = utils.dateFormat(end, pattern);
	return fromString + "..." + toString + "|" + pattern;
}

/**
 * Creates a date from the given week number in the given year<p>
 * 
 * Note that the week of year depends on the current Locale in what is 
 * considered the first day of week and the minimal number of days in the first week.
 * 
 * @param {Number} year
 * @param {Number} week
 * 
 * @return {Date}
 *
 * @properties={typeid:24,uuid:"9BE1A5B5-7882-4E15-8EC7-2578F0C6AC81"}
 */
function createDateFromWeekNumber(year, week) {
	calendar.clear();
	calendar.set(java.util.Calendar.YEAR,year);
	calendar.set(java.util.Calendar.WEEK_OF_YEAR,week);
	return new Date(calendar.getTimeInMillis());
}

/**
 * Creates a from - to search String for the two dates<br>
 * 
 * @see createDateSearchString(start, end) if date only search is needed
 * 
 * @param {Date} start
 * @param {Date} end
 * 
 * @return {String} searchString
 *
 * @properties={typeid:24,uuid:"8B6608CF-4DF5-461F-88F5-A4B949820E16"}
 */
function createDateTimeSearchString(start, end) {
	var pattern = "yyyy-MM-dd HH:mm:ss";
	var fromString = utils.dateFormat(start, pattern);
	var toString = utils.dateFormat(end, pattern);
	return fromString + "..." + toString + "|" + pattern;
}

/**
 * Returns the number of full days between the two dates
 * 
 * @param {Date} start
 * @param {Date} end
 * 
 * @return {Number} fullDaysBetween
 *
 * @properties={typeid:24,uuid:"D9F78345-D31D-4A79-8C28-230F7BC467B4"}
 */
function getDayDifference(start, end) {
	return Math.ceil(((end.getTime() - start.getTime()) / 86400000));
}

/**
 * Returns an array containing the names of the months for either the current or the given Locale
 * 
 * @param {String} [locale] - the optional Locale
 * 
 * @return {String[]} monthNames
 *
 * @properties={typeid:24,uuid:"943049F8-DA16-4044-91BD-8421206EB3D0"}
 */
function getMonthNames(locale) {
	var dfs;
	if (locale) {
		var l = new java.util.Locale(locale);
		dfs = new java.text.DateFormatSymbols(l);		
	} else {
		dfs = new java.text.DateFormatSymbols();
	}
	return dfs.getMonths();
}

/**
 * Returns an array containing the short names of the months for either the current or the given Locale
 * 
 * @param {String} [locale] - the optional Locale
 * 
 * @return {String[]} shortMonthNames
 *
 * @properties={typeid:24,uuid:"7592A33A-09E1-4594-BC8A-A048532E11F0"}
 */
function getShortMonthNames(locale) {
	var dfs;
	if (locale) {
		var l = new java.util.Locale(locale);
		dfs = new java.text.DateFormatSymbols(l);		
	} else {
		dfs = new java.text.DateFormatSymbols();
	}
	return dfs.getShortMonths();
}

/**
 * Returns an array containing the names of the weekdays for either the current or the given Locale
 * 
 * @param {String} [locale] - the optional Locale
 * 
 * @return {String[]} weekdayNames
 * 
 * @example // returns an array of all week days in French<br>
 * var dayNames = scopes.modUtils$date.getWeekdayNames("fr");
 *
 * @properties={typeid:24,uuid:"06E0DFE5-0CC7-4B67-8AEF-138055EDE536"}
 */
function getWeekdayNames(locale) {
	var dfs;
	if (locale) {
		var l = new java.util.Locale(locale);
		dfs = new java.text.DateFormatSymbols(l);		
	} else {
		dfs = new java.text.DateFormatSymbols();
	}
	return dfs.getWeekdays();
}

/**
 * Returns the week of the year of the given date<p>
 * 
 * Note that the week of year depends on the current Locale in what is 
 * considered the first day of week and the minimal number of days in the first week.
 * 
 * @param date
 * 
 * @return {Number} weekOfYear
 *
 * @properties={typeid:24,uuid:"F8627926-CBDA-4C82-949E-ED924C902BDB"}
 */
function getWeekOfYear(date) {
	calendar.setTimeInMillis(date.getTime());
	return calendar.get(java.util.Calendar.WEEK_OF_YEAR);
}

/**
 * Returns an array containing the short names of the weekdays for either the current or the given Locale
 * 
 * @param {String} [locale] - the optional Locale
 * 
 * @return {String[]} shortWeekdayNames
 * 
 * @example // returns an array of all the short names of the week days in French<br>
 * var dayNames = scopes.modUtils$date.getShortWeekdayNames("fr");
 *
 * @properties={typeid:24,uuid:"18721F93-8475-4680-A922-739A74B87C3A"}
 */
function getShortWeekdayNames(locale) {
	var dfs;
	if (locale) {
		var l = new java.util.Locale(locale);
		dfs = new java.text.DateFormatSymbols(l);		
	} else {
		dfs = new java.text.DateFormatSymbols();
	}
	return dfs.getWeekdays();
}

/**
 * Returns true if the given year is a leap year
 * 
 * @param {Number} year
 * 
 * @return {Boolean} isLeapYear
 *
 * @properties={typeid:24,uuid:"D088D565-BD12-4640-87CF-B68D1BF465D0"}
 */
function isLeapYear(year) {
	var cal = new java.util.GregorianCalendar();
    return cal.isLeapYear(year);
}

/**
 * Returns the day of the week
 * 
 * @param {Date} date
 *
 * @return {Number} dayOfWeek
 * 
 * @properties={typeid:24,uuid:"B7A77C91-7F99-4ED1-978B-1CB61D953249"}
 */
function getDayOfWeek(date) {
	calendar.setTimeInMillis(date.getTime());
	return calendar.get(java.util.Calendar.DAY_OF_WEEK);
}

/**
 * Returns the day of the year
 * 
 * @param {Date} date
 *
 * @return {Number} dayOfYear
 * 
 * @properties={typeid:24,uuid:"35AF5956-EF79-4C9C-BDA9-EF0F828E945A"}
 */
function getDayOfYear(date) {
	calendar.setTimeInMillis(date.getTime());
	return calendar.get(java.util.Calendar.DAY_OF_WEEK);
}

/**
 * Returns a new date of the first day of the week of the given date
 * 
 * @param {Date} date
 * 
 * @return {Date} firstDayOfWeek
 *
 * @properties={typeid:24,uuid:"0683A145-8BA1-4C12-90F1-A646DA22972B"}
 */
function getFirstDayOfWeek(date) {
	calendar.setTimeInMillis(date.getTime());
	var tmp = java.util.Calendar.getInstance();
	tmp.clear();
	tmp.set(java.util.Calendar.YEAR, calendar.get(java.util.Calendar.YEAR));
	tmp.set(java.util.Calendar.MONTH, calendar.get(java.util.Calendar.MONTH));
	tmp.set(java.util.Calendar.WEEK_OF_MONTH, calendar.get(java.util.Calendar.WEEK_OF_MONTH));
	return new Date(tmp.getTimeInMillis());
}

/**
 * Returns a new date of the first day of the month of the given date
 * 
 * @param {Date} date
 * 
 * @return {Date} firstDayOfMonth
 *
 * @properties={typeid:24,uuid:"71A159C0-D42F-478B-9D82-65DD96745D81"}
 */
function getFirstDayOfMonth(date) {
	return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Returns a new date of the first day of the month of the given date
 * 
 * @param {Date} date
 * 
 * @return {Date} firstDayOfMonth
 *
 * @properties={typeid:24,uuid:"A94919B7-4EA9-4E78-A25E-A04554C43DE5"}
 */
function getFirstDayOfYear(date) {
	return new Date(date.getFullYear(), 0, 1);
}

/**
 * Returns a new date of the last day of the week of the given date
 * 
 * @param {Date} date
 * 
 * @return {Date} lastDayOfWeek
 *
 * @properties={typeid:24,uuid:"2F02AF7E-37DC-4610-B55E-2B6E5EA95B02"}
 */
function getLastDayOfWeek(date) {
	calendar.setTimeInMillis(date.getTime());
	var tmp = java.util.Calendar.getInstance();
	tmp.clear();
	tmp.set(calendar.get(java.util.Calendar.YEAR), calendar.get(java.util.Calendar.MONTH), calendar.get(java.util.Calendar.DATE));
	tmp.add(java.util.Calendar.WEEK_OF_YEAR, 1);
	tmp.set(java.util.Calendar.DAY_OF_WEEK, calendar.getFirstDayOfWeek());
	tmp.add(java.util.Calendar.DATE, -1);
	return new Date(tmp.getTimeInMillis());
}

/**
 * Returns a new date of the last day of the year of the given date
 * 
 * @param {Date} date
 * 
 * @return {Date} lastDayOfYear
 *
 * @properties={typeid:24,uuid:"1D0F9079-63BE-4999-BB24-597340D2C07D"}
 */
function getLastDayOfYear(date) {
	calendar.setTimeInMillis(date.getTime());
	var tmp = java.util.Calendar.getInstance();
	tmp.clear();
	tmp.set(java.util.Calendar.YEAR,calendar.get(java.util.Calendar.YEAR) + 1);
	tmp.add(java.util.Calendar.DAY_OF_YEAR, -1);
	return new Date(tmp.getTimeInMillis());
}

/**
 * Returns a ISO 8601 formatted String of the given Date
 * 
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"7F519BC0-F9BF-4162-B243-FD1AB2CE3581"}
 */
function getISODateTime(date) {
	return utils.dateFormat(date,"yyyyMMdd'T'HHmmss");
}

/**
 * Returns a ISO 8601 date only formatted String of the given Date
 * 
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"A5FA8C56-3A85-43DE-8F55-594659FF56E2"}
 */
function getISODate(date) {
	return utils.dateFormat(date,"yyyyMMdd");
}

/**
 * Returns a ISO 8601 time only formatted String of the given Date
 * 
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"78F71D31-063E-4341-B5C1-579C0B2E93C6"}
 */
function getISOTime(date) {
	return utils.dateFormat(date,"'T'HHmmss");
}

/**
 * Returns a new date of the last day of the month of the given date
 * 
 * @param {Date} date
 * 
 * @return {Date} lastDayOfMonth
 *
 * @properties={typeid:24,uuid:"27CE5406-5029-485F-98F5-DA3A7AF17A7A"}
 */
function getLastDayOfMonth(date) {
	calendar.setTimeInMillis(date.getTime());
	var tmp = java.util.Calendar.getInstance();
	tmp.clear();
	tmp.set(java.util.Calendar.YEAR, calendar.get(java.util.Calendar.YEAR));
	tmp.set(java.util.Calendar.MONTH, calendar.get(java.util.Calendar.MONTH) + 1);
	tmp.add(java.util.Calendar.DATE, -1);
	return new Date(tmp.getTimeInMillis());
}

/**
 * Takes the time of the given date and returns the hours as a decimal value
 * 
 * @param {Date} date
 *
 * @properties={typeid:24,uuid:"E4550770-C64A-4CEA-8659-3DD6ADCEFE29"}
 */
function getDecimalHours(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes() / 60 + date.getSeconds() / 3600 + date.getMilliseconds() / 3600000;
	return hours + minutes;
}

/**
 * Creates a DateTime object that can be used to chain methods of this class<br>
 * as for example <code>dateTimeObject.addDays(5).toStartOfDay().date</code>
 * 
 * @constructor 
 * @param {Date} [date]
 *
 * @properties={typeid:24,uuid:"55DB0D7E-712A-47B8-8A54-4689C658FF08"}
 */
function DateTime(date) {
	
	/**
	 * The Date object of this DateTime
	 */
	this.date = date ? date : application.getServerTimeStamp();
	
	/**
	 * Adds the given unit with the given amount to this date
	 * 
	 * @param {Number} unit - one of scopes.modUtils$date.UNITS
	 * @param {Number} amount
	 * 
	 * @throws {scopes.svyExceptions.IllegalArgumentException}
	 * 
	 * @return {DateTime}
	 */
	this.addUnits = function(unit, amount) {
		/** @type {DateTime} */
		var _this = this;
		if(!amount) throw new scopes.svyExceptions.IllegalArgumentException('amount cannot be null/undefined', null, null);
		if(!unit) throw new scopes.svyExceptions.IllegalArgumentException('units cannot be null/undefined', null, null);
		switch (unit) {
			case scopes.modUtils$date.UNITS.HOUR:
				date.setHours(_this.date.getHours() + amount);
				break;
			case scopes.modUtils$date.UNITS.DAY:
				date.setDate(_this.date.getDate() + amount);
				break;
			case scopes.modUtils$date.UNITS.WEEK:
				date.setDate(_this.date.getDate() + (amount * 7));
				break;
			case scopes.modUtils$date.UNITS.MONTH:
				date.setMonth(_this.date.getMonth() + amount);
				break;
			case scopes.modUtils$date.UNITS.YEAR:
				date.setFullYear(_this.date.getFullYear() + amount);
				break;
			default:
				throw new scopes.svyExceptions.IllegalArgumentException('Unsupported value for units', null, null);
		}
		return this;
	}
	
	/**
	 * Adds the given number of days to the given date<br>
	 * Negative number of days will be substracted
	 *
	 * @param {Number} days - number of days to add
	 *
	 * @return {DateTime}
	 */
	this.addDays = function(days) {
		this.date = addDays(this.date, days);
		return this;
	}
	
	/**
	 * Adds the given number of hours to the given date<br>
	 * Negative number of hours will be substracted
	 *
	 * @param {Number} hours - number of hours to add
	 *
	 * @return {DateTime}
	 */
	this.addHours = function(hours) {
		this.date = addHours(this.date,hours);
		return this;
	}
	
	/**
	 * Adds the given number of minutes to the given date<br>
	 * Negative number of minutes will be substracted
	 *
	 * @param {Number} minutes - number of minutes to add
	 *
	 * @return {DateTime}
	 */
	this.addMinutes = function(minutes) {
		this.date = addMinutes(this.date,minutes);
		return this;
	}
	
	/**
	 * Adds the given number of months to the given date<br>
	 * Negative number of months will be substracted
	 *
	 * @param {Number} months - number of months to add
	 *
	 * @return {DateTime}
	 */
	this.addMonths = function(months) {
		this.date = addMonths(this.date,months);
		return this;
	}
	
	/**
	 * Adds the given number of seconds to the given date<br>
	 * Negative number of seconds will be substracted
	 *
	 * @param {Number} seconds - number of seconds to add
	 *
	 * @return {DateTime}
	 */
	this.addSeconds = function(seconds) {
		this.date = addSeconds(this.date,seconds);
		return this;
	}
	
	/**
	 * Adds the given number of weeks to the given date<br>
	 * Negative number of weeks will be substracted
	 *
	 * @param {Number} weeks - number of weeks to add
	 *
	 * @return {DateTime}
	 */
	this.addWeeks = function(weeks) {
		this.date = addWeeks(this.date,weeks);
		return this;
	}	
	
	/**
	 * Adds the given number of years to the given date<br>
	 * Negative number of years will be substracted
	 *
	 * @param {Number} years - number of years to add
	 *
	 * @return {DateTime}
	 */
	this.addYears = function(years) {
		this.date = addYears(this.date,years);
		return this;
	}
	
	/**
	 * Returns the day of the week
	 *
	 * @return {Number} dayOfWeek
	 */
	this.getDayOfWeek = function() {
		return getDayOfWeek(this.date);
	}
	
	/**
	 * Returns the day of the year
	 *
	 * @return {Number} dayOfYear
	 */
	this.getDayOfYear = function() {
		return getDayOfYear(this.date);
	}
	
	/**
	 * Returns the week of the year
	 * 
	 * @return {Number} weekOfYear
	 */
	this.getWeekOfYear = function() {
		return getWeekOfYear(this.date);
	}
	
	/**
	 * Sets the time of the given date to 00:00:00.000
	 * 
	 * @return {DateTime}
	 */
	this.toStartOfDay = function() {
		this.date = toStartOfDay(this.date);
		return this;
	}
	
	/**
	 * Sets the time of the given date to 23:59:59.999
	 * 
	 * @return {DateTime}
	 */
	this.toEndOfDay = function() {
		this.date = toEndOfDay(this.date);
		return this;
	}	
	
	/**
	 * Sets this DateTime to the first day of the month
	 * 
	 * @return {DateTime}
	 *
	 * @properties={typeid:24,uuid:"7C02ADA9-3E54-4D48-9A36-81D228CDD802"}
	 */
	this.toFirstDayOfMonth = function() {
		this.date = getFirstDayOfMonth(this.date);
		return this;
	}
	
	/**
	 * Sets this DateTime to the first day of the week
	 * 
	 * @return {DateTime}
	 *
	 * @properties={typeid:24,uuid:"7C02ADA9-3E54-4D48-9A36-81D228CDD802"}
	 */
	this.toFirstDayOfWeek = function() {
		this.date = getFirstDayOfWeek(this.date);
		return this;
	}	
	
	/**
	 * Sets this DateTime to the first day of the year
	 * 
	 * @return {DateTime}
	 *
	 * @properties={typeid:24,uuid:"7C02ADA9-3E54-4D48-9A36-81D228CDD802"}
	 */
	this.toFirstDayOfYear = function() {
		this.date = getFirstDayOfWeek(this.date);
		return this;
	}	
	
	/**
	 * Sets this DateTime to the first day of the month
	 * 
	 * @return {DateTime}
	 *
	 * @properties={typeid:24,uuid:"7C02ADA9-3E54-4D48-9A36-81D228CDD802"}
	 */
	this.toLastDayOfMonth = function() {
		this.date = getLastDayOfMonth(this.date);
		return this;
	}
	
	/**
	 * Sets this DateTime to the last day of the week
	 * 
	 * @return {DateTime}
	 *
	 * @properties={typeid:24,uuid:"7C02ADA9-3E54-4D48-9A36-81D228CDD802"}
	 */
	this.toLastDayOfWeek = function() {
		this.date = getLastDayOfWeek(this.date);
		return this;
	}	
	
	/**
	 * Sets this DateTime to the last day of the year
	 * 
	 * @return {DateTime}
	 *
	 * @properties={typeid:24,uuid:"7C02ADA9-3E54-4D48-9A36-81D228CDD802"}
	 */
	this.toLastDayOfYear = function() {
		this.date = getLastDayOfWeek(this.date);
		return this;
	}		
}

/**
 * Checks if a value is one of the defined time units
 * @param {Number} value
 * @return {Boolean}
 * @properties={typeid:24,uuid:"99754644-EE04-407C-B132-734F4BC54E0E"}
 */
function isValueTimeUnit(value){
	if(!value){
		throw new scopes.svyExceptions.IllegalArgumentException('Value is required');
	}
	var values = [
		UNITS.HOUR,
		UNITS.DAY,
		UNITS.WEEK,
		UNITS.MONTH,
		UNITS.QUARTER,
		UNITS.YEAR
	];
	for(i in values){
		if(value == values[i]){
			return true;
		}
	}
	return false;
}