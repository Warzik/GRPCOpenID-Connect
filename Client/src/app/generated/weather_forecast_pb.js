// source: weather_forecast.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.server.protos.WeatherData', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.server.protos.WeatherData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.server.protos.WeatherData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.server.protos.WeatherData.displayName = 'proto.server.protos.WeatherData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.server.protos.WeatherData.prototype.toObject = function(opt_includeInstance) {
  return proto.server.protos.WeatherData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.server.protos.WeatherData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.protos.WeatherData.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateTimeStamp: (f = msg.getDateTimeStamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    temperatureC: jspb.Message.getFieldWithDefault(msg, 2, 0),
    temperatureF: jspb.Message.getFieldWithDefault(msg, 3, 0),
    summary: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.server.protos.WeatherData}
 */
proto.server.protos.WeatherData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.server.protos.WeatherData;
  return proto.server.protos.WeatherData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.server.protos.WeatherData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.server.protos.WeatherData}
 */
proto.server.protos.WeatherData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateTimeStamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTemperatureC(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTemperatureF(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.server.protos.WeatherData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.server.protos.WeatherData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.server.protos.WeatherData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.protos.WeatherData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateTimeStamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTemperatureC();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTemperatureF();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp date_time_stamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.server.protos.WeatherData.prototype.getDateTimeStamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.server.protos.WeatherData} returns this
*/
proto.server.protos.WeatherData.prototype.setDateTimeStamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.server.protos.WeatherData} returns this
 */
proto.server.protos.WeatherData.prototype.clearDateTimeStamp = function() {
  return this.setDateTimeStamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.server.protos.WeatherData.prototype.hasDateTimeStamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 temperature_c = 2;
 * @return {number}
 */
proto.server.protos.WeatherData.prototype.getTemperatureC = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.server.protos.WeatherData} returns this
 */
proto.server.protos.WeatherData.prototype.setTemperatureC = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 temperature_f = 3;
 * @return {number}
 */
proto.server.protos.WeatherData.prototype.getTemperatureF = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.server.protos.WeatherData} returns this
 */
proto.server.protos.WeatherData.prototype.setTemperatureF = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string summary = 4;
 * @return {string}
 */
proto.server.protos.WeatherData.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.server.protos.WeatherData} returns this
 */
proto.server.protos.WeatherData.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.server.protos);
