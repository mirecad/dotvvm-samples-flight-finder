var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FlightFinder;
(function (FlightFinder) {
    var Web;
    (function (Web) {
        var Api;
        (function (Api) {
            var ClientBase = /** @class */ (function () {
                function ClientBase() {
                }
                ClientBase.prototype.transformOptions = function (options) {
                    options.credentials = "same-origin";
                    return Promise.resolve(options);
                };
                return ClientBase;
            }());
            /* tslint:disable */
            //----------------------
            // <auto-generated>
            //     Generated using the NSwag toolchain v11.12.13.0 (NJsonSchema v9.10.14.0 (Newtonsoft.Json v10.0.0.0)) (http://NSwag.org)
            // </auto-generated>
            //----------------------
            // ReSharper disable InconsistentNaming
            var Client = /** @class */ (function (_super) {
                __extends(Client, _super);
                function Client(baseUrl, http) {
                    var _this = _super.call(this) || this;
                    _this.jsonParseReviver = undefined;
                    _this.http = http ? http : window;
                    _this.baseUrl = baseUrl ? baseUrl : "";
                    return _this;
                }
                /**
                 * @return Success
                 */
                Client.prototype.airports = function () {
                    var _this = this;
                    var url_ = this.baseUrl + "/api/Airports";
                    url_ = url_.replace(/[?&]$/, "");
                    var options_ = {
                        method: "GET",
                        headers: new Headers({
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        })
                    };
                    return this.transformOptions(options_).then(function (transformedOptions_) {
                        return _this.http.fetch(url_, transformedOptions_);
                    }).then(function (_response) {
                        return _this.processAirports(_response);
                    });
                };
                Client.prototype.processAirports = function (response) {
                    var _this = this;
                    var status = response.status;
                    var _headers = {};
                    if (response.headers && response.headers.forEach) {
                        response.headers.forEach(function (v, k) { return _headers[k] = v; });
                    }
                    ;
                    if (status === 200) {
                        return response.text().then(function (_responseText) {
                            var result200 = null;
                            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                            if (resultData200 && resultData200.constructor === Array) {
                                result200 = [];
                                for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                                    var item = resultData200_1[_i];
                                    result200.push(Airport.fromJS(item));
                                }
                            }
                            return result200;
                        });
                    }
                    else if (status !== 200 && status !== 204) {
                        return response.text().then(function (_responseText) {
                            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                        });
                    }
                    return Promise.resolve(null);
                };
                /**
                 * @criteria (optional)
                 * @return Success
                 */
                Client.prototype.search = function (criteria) {
                    var _this = this;
                    var url_ = this.baseUrl + "/api/FlightSearch";
                    url_ = url_.replace(/[?&]$/, "");
                    var content_ = JSON.stringify(criteria);
                    var options_ = {
                        body: content_,
                        method: "POST",
                        headers: new Headers({
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        })
                    };
                    return this.transformOptions(options_).then(function (transformedOptions_) {
                        return _this.http.fetch(url_, transformedOptions_);
                    }).then(function (_response) {
                        return _this.processSearch(_response);
                    });
                };
                Client.prototype.processSearch = function (response) {
                    var _this = this;
                    var status = response.status;
                    var _headers = {};
                    if (response.headers && response.headers.forEach) {
                        response.headers.forEach(function (v, k) { return _headers[k] = v; });
                    }
                    ;
                    if (status === 200) {
                        return response.text().then(function (_responseText) {
                            var result200 = null;
                            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                            if (resultData200 && resultData200.constructor === Array) {
                                result200 = [];
                                for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                                    var item = resultData200_2[_i];
                                    result200.push(Itinerary.fromJS(item));
                                }
                            }
                            return result200;
                        });
                    }
                    else if (status !== 200 && status !== 204) {
                        return response.text().then(function (_responseText) {
                            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                        });
                    }
                    return Promise.resolve(null);
                };
                return Client;
            }(ClientBase));
            Api.Client = Client;
            var Airport = /** @class */ (function () {
                function Airport(data) {
                    if (data) {
                        for (var property in data) {
                            if (data.hasOwnProperty(property))
                                this[property] = data[property];
                        }
                    }
                }
                Airport.prototype.init = function (data) {
                    if (data) {
                        this.Code = data["code"] !== undefined ? data["code"] : null;
                        this.DisplayName = data["displayName"] !== undefined ? data["displayName"] : null;
                    }
                };
                Airport.fromJS = function (data) {
                    var result = new Airport();
                    result.init(data);
                    return result;
                };
                Airport.prototype.toJSON = function (data) {
                    data = typeof data === 'object' ? data : {};
                    data["code"] = this.Code !== undefined ? this.Code : null;
                    data["displayName"] = this.DisplayName !== undefined ? this.DisplayName : null;
                    return data;
                };
                return Airport;
            }());
            Api.Airport = Airport;
            var SearchCriteria = /** @class */ (function () {
                function SearchCriteria(data) {
                    if (data) {
                        for (var property in data) {
                            if (data.hasOwnProperty(property))
                                this[property] = data[property];
                        }
                    }
                }
                SearchCriteria.prototype.init = function (data) {
                    if (data) {
                        this.FromAirport = data["fromAirport"] !== undefined ? data["fromAirport"] : null;
                        this.ToAirport = data["toAirport"] !== undefined ? data["toAirport"] : null;
                        this.OutboundDate = data["outboundDate"] ? new Date(data["outboundDate"].toString()) : null;
                        this.ReturnDate = data["returnDate"] ? new Date(data["returnDate"].toString()) : null;
                        this.TicketClass = data["ticketClass"] !== undefined ? data["ticketClass"] : null;
                    }
                };
                SearchCriteria.fromJS = function (data) {
                    var result = new SearchCriteria();
                    result.init(data);
                    return result;
                };
                SearchCriteria.prototype.toJSON = function (data) {
                    data = typeof data === 'object' ? data : {};
                    data["fromAirport"] = this.FromAirport !== undefined ? this.FromAirport : null;
                    data["toAirport"] = this.ToAirport !== undefined ? this.ToAirport : null;
                    data["outboundDate"] = this.OutboundDate ? this.OutboundDate.toISOString() : null;
                    data["returnDate"] = this.ReturnDate ? this.ReturnDate.toISOString() : null;
                    data["ticketClass"] = this.TicketClass !== undefined ? this.TicketClass : null;
                    return data;
                };
                return SearchCriteria;
            }());
            Api.SearchCriteria = SearchCriteria;
            var Itinerary = /** @class */ (function () {
                function Itinerary(data) {
                    if (data) {
                        for (var property in data) {
                            if (data.hasOwnProperty(property))
                                this[property] = data[property];
                        }
                    }
                }
                Itinerary.prototype.init = function (data) {
                    if (data) {
                        this.Outbound = data["outbound"] ? FlightSegment.fromJS(data["outbound"]) : null;
                        this.Return = data["return"] ? FlightSegment.fromJS(data["return"]) : null;
                        this.Price = data["price"] !== undefined ? data["price"] : null;
                        this.TotalDurationHours = data["totalDurationHours"] !== undefined ? data["totalDurationHours"] : null;
                        this.AirlineName = data["airlineName"] !== undefined ? data["airlineName"] : null;
                    }
                };
                Itinerary.fromJS = function (data) {
                    var result = new Itinerary();
                    result.init(data);
                    return result;
                };
                Itinerary.prototype.toJSON = function (data) {
                    data = typeof data === 'object' ? data : {};
                    data["outbound"] = this.Outbound ? this.Outbound.toJSON() : null;
                    data["return"] = this.Return ? this.Return.toJSON() : null;
                    data["price"] = this.Price !== undefined ? this.Price : null;
                    data["totalDurationHours"] = this.TotalDurationHours !== undefined ? this.TotalDurationHours : null;
                    data["airlineName"] = this.AirlineName !== undefined ? this.AirlineName : null;
                    return data;
                };
                return Itinerary;
            }());
            Api.Itinerary = Itinerary;
            var FlightSegment = /** @class */ (function () {
                function FlightSegment(data) {
                    if (data) {
                        for (var property in data) {
                            if (data.hasOwnProperty(property))
                                this[property] = data[property];
                        }
                    }
                }
                FlightSegment.prototype.init = function (data) {
                    if (data) {
                        this.Airline = data["airline"] !== undefined ? data["airline"] : null;
                        this.FromAirportCode = data["fromAirportCode"] !== undefined ? data["fromAirportCode"] : null;
                        this.ToAirportCode = data["toAirportCode"] !== undefined ? data["toAirportCode"] : null;
                        this.DepartureTime = data["departureTime"] ? new Date(data["departureTime"].toString()) : null;
                        this.ReturnTime = data["returnTime"] ? new Date(data["returnTime"].toString()) : null;
                        this.DurationHours = data["durationHours"] !== undefined ? data["durationHours"] : null;
                        this.TicketClass = data["ticketClass"] ? TicketClassData.fromJS(data["ticketClass"]) : null;
                    }
                };
                FlightSegment.fromJS = function (data) {
                    var result = new FlightSegment();
                    result.init(data);
                    return result;
                };
                FlightSegment.prototype.toJSON = function (data) {
                    data = typeof data === 'object' ? data : {};
                    data["airline"] = this.Airline !== undefined ? this.Airline : null;
                    data["fromAirportCode"] = this.FromAirportCode !== undefined ? this.FromAirportCode : null;
                    data["toAirportCode"] = this.ToAirportCode !== undefined ? this.ToAirportCode : null;
                    data["departureTime"] = this.DepartureTime ? this.DepartureTime.toISOString() : null;
                    data["returnTime"] = this.ReturnTime ? this.ReturnTime.toISOString() : null;
                    data["durationHours"] = this.DurationHours !== undefined ? this.DurationHours : null;
                    data["ticketClass"] = this.TicketClass ? this.TicketClass.toJSON() : null;
                    return data;
                };
                return FlightSegment;
            }());
            Api.FlightSegment = FlightSegment;
            var TicketClassData = /** @class */ (function () {
                function TicketClassData(data) {
                    if (data) {
                        for (var property in data) {
                            if (data.hasOwnProperty(property))
                                this[property] = data[property];
                        }
                    }
                }
                TicketClassData.prototype.init = function (data) {
                    if (data) {
                        this.Name = data["name"] !== undefined ? data["name"] : null;
                        this.Value = data["value"] !== undefined ? data["value"] : null;
                    }
                };
                TicketClassData.fromJS = function (data) {
                    var result = new TicketClassData();
                    result.init(data);
                    return result;
                };
                TicketClassData.prototype.toJSON = function (data) {
                    data = typeof data === 'object' ? data : {};
                    data["name"] = this.Name !== undefined ? this.Name : null;
                    data["value"] = this.Value !== undefined ? this.Value : null;
                    return data;
                };
                return TicketClassData;
            }());
            Api.TicketClassData = TicketClassData;
            var SearchCriteriaTicketClass;
            (function (SearchCriteriaTicketClass) {
                SearchCriteriaTicketClass[SearchCriteriaTicketClass["_0"] = 0] = "_0";
                SearchCriteriaTicketClass[SearchCriteriaTicketClass["_1"] = 1] = "_1";
                SearchCriteriaTicketClass[SearchCriteriaTicketClass["_2"] = 2] = "_2";
                SearchCriteriaTicketClass[SearchCriteriaTicketClass["_3"] = 3] = "_3";
            })(SearchCriteriaTicketClass = Api.SearchCriteriaTicketClass || (Api.SearchCriteriaTicketClass = {}));
            var TicketClassDataValue;
            (function (TicketClassDataValue) {
                TicketClassDataValue[TicketClassDataValue["_0"] = 0] = "_0";
                TicketClassDataValue[TicketClassDataValue["_1"] = 1] = "_1";
                TicketClassDataValue[TicketClassDataValue["_2"] = 2] = "_2";
                TicketClassDataValue[TicketClassDataValue["_3"] = 3] = "_3";
            })(TicketClassDataValue = Api.TicketClassDataValue || (Api.TicketClassDataValue = {}));
            var SwaggerException = /** @class */ (function (_super) {
                __extends(SwaggerException, _super);
                function SwaggerException(message, status, response, headers, result) {
                    var _this = _super.call(this) || this;
                    _this.isSwaggerException = true;
                    _this.message = message;
                    _this.status = status;
                    _this.response = response;
                    _this.headers = headers;
                    _this.result = result;
                    return _this;
                }
                SwaggerException.isSwaggerException = function (obj) {
                    return obj.isSwaggerException === true;
                };
                return SwaggerException;
            }(Error));
            Api.SwaggerException = SwaggerException;
            function throwException(message, status, response, headers, result) {
                if (result !== null && result !== undefined)
                    throw result;
                else
                    throw new SwaggerException(message, status, response, headers, null);
            }
        })(Api = Web.Api || (Web.Api = {}));
    })(Web = FlightFinder.Web || (FlightFinder.Web = {}));
})(FlightFinder || (FlightFinder = {}));
