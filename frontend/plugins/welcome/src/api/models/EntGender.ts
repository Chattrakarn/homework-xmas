/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API Playlist Vidoe
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntGenderEdges,
    EntGenderEdgesFromJSON,
    EntGenderEdgesFromJSONTyped,
    EntGenderEdgesToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntGender
 */
export interface EntGender {
    /**
     * 
     * @type {EntGenderEdges}
     * @memberof EntGender
     */
    edges?: EntGenderEdges;
    /**
     * Gender holds the value of the "gender" field.
     * @type {string}
     * @memberof EntGender
     */
    gender?: string;
    /**
     * ID of the ent.
     * @type {number}
     * @memberof EntGender
     */
    id?: number;
}

export function EntGenderFromJSON(json: any): EntGender {
    return EntGenderFromJSONTyped(json, false);
}

export function EntGenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntGender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'edges': !exists(json, 'edges') ? undefined : EntGenderEdgesFromJSON(json['edges']),
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function EntGenderToJSON(value?: EntGender | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'edges': EntGenderEdgesToJSON(value.edges),
        'gender': value.gender,
        'id': value.id,
    };
}


