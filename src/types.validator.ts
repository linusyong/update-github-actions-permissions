// @ts-nocheck
// eslint-disable
// This file is generated by create-validator-ts
import Ajv from "ajv";
import * as apiTypes from "./types";

export const SCHEMA = {
    $schema: "http://json-schema.org/draft-07/schema#",
    definitions: {
        GhPermissionValue: {
            type: "string",
            enum: ["none", "read", "write"]
        },
        GhPermissionTypes: {
            type: "object",
            properties: {
                actions: {
                    $ref: "#/definitions/GhPermissionValue"
                },
                checks: {
                    $ref: "#/definitions/GhPermissionValue"
                },
                contents: {
                    $ref: "#/definitions/GhPermissionValue"
                },
                "pull-requests": {
                    $ref: "#/definitions/GhPermissionValue"
                },
                deployments: {
                    $ref: "#/definitions/GhPermissionValue"
                },
                issues: {
                    $ref: "#/definitions/GhPermissionValue"
                },
                packages: {
                    $ref: "#/definitions/GhPermissionValue"
                },
                "repository-projects": {
                    $ref: "#/definitions/GhPermissionValue"
                },
                "security-events": {
                    $ref: "#/definitions/GhPermissionValue"
                },
                statuses: {
                    $ref: "#/definitions/GhPermissionValue"
                }
            },
            additionalProperties: false
        },
        GhPermissions: {
            anyOf: [
                {
                    type: "string",
                    const: "read-all"
                },
                {
                    type: "string",
                    const: "write-all"
                },
                {
                    $ref: "#/definitions/GhPermissionTypes"
                }
            ]
        },
        GhPermissionsDefinition: {
            type: "object",
            properties: {
                permissions: {
                    $ref: "#/definitions/GhPermissions"
                }
            },
            required: ["permissions"],
            additionalProperties: false
        },
        GhPermissionsDefinitions: {
            type: "object",
            additionalProperties: {
                anyOf: [
                    {
                        $ref: "#/definitions/GhPermissionsDefinition"
                    },
                    {
                        type: "null"
                    }
                ]
            }
        }
    }
};
const ajv = new Ajv({ removeAdditional: true }).addSchema(SCHEMA, "SCHEMA");
export function validateGhPermissionValue(payload: unknown): apiTypes.GhPermissionValue {
    /** Schema is defined in {@link SCHEMA.definitions.GhPermissionValue } **/
    const validator = ajv.getSchema("SCHEMA#/definitions/GhPermissionValue");
    const valid = validator(payload);
    if (!valid) {
        const error = new Error(
            "Invalid GhPermissionValue: " + ajv.errorsText(validator.errors, { dataVar: "GhPermissionValue" })
        );
        error.name = "ValidationError";
        throw error;
    }
    return payload;
}

export function isGhPermissionValue(payload: unknown): payload is apiTypes.GhPermissionValue {
    try {
        validateGhPermissionValue(payload);
        return true;
    } catch (error) {
        return false;
    }
}

export function validateGhPermissionTypes(payload: unknown): apiTypes.GhPermissionTypes {
    /** Schema is defined in {@link SCHEMA.definitions.GhPermissionTypes } **/
    const validator = ajv.getSchema("SCHEMA#/definitions/GhPermissionTypes");
    const valid = validator(payload);
    if (!valid) {
        const error = new Error(
            "Invalid GhPermissionTypes: " + ajv.errorsText(validator.errors, { dataVar: "GhPermissionTypes" })
        );
        error.name = "ValidationError";
        throw error;
    }
    return payload;
}

export function isGhPermissionTypes(payload: unknown): payload is apiTypes.GhPermissionTypes {
    try {
        validateGhPermissionTypes(payload);
        return true;
    } catch (error) {
        return false;
    }
}

export function validateGhPermissions(payload: unknown): apiTypes.GhPermissions {
    /** Schema is defined in {@link SCHEMA.definitions.GhPermissions } **/
    const validator = ajv.getSchema("SCHEMA#/definitions/GhPermissions");
    const valid = validator(payload);
    if (!valid) {
        const error = new Error(
            "Invalid GhPermissions: " + ajv.errorsText(validator.errors, { dataVar: "GhPermissions" })
        );
        error.name = "ValidationError";
        throw error;
    }
    return payload;
}

export function isGhPermissions(payload: unknown): payload is apiTypes.GhPermissions {
    try {
        validateGhPermissions(payload);
        return true;
    } catch (error) {
        return false;
    }
}

export function validateGhPermissionsDefinition(payload: unknown): apiTypes.GhPermissionsDefinition {
    /** Schema is defined in {@link SCHEMA.definitions.GhPermissionsDefinition } **/
    const validator = ajv.getSchema("SCHEMA#/definitions/GhPermissionsDefinition");
    const valid = validator(payload);
    if (!valid) {
        const error = new Error(
            "Invalid GhPermissionsDefinition: " +
                ajv.errorsText(validator.errors, { dataVar: "GhPermissionsDefinition" })
        );
        error.name = "ValidationError";
        throw error;
    }
    return payload;
}

export function isGhPermissionsDefinition(payload: unknown): payload is apiTypes.GhPermissionsDefinition {
    try {
        validateGhPermissionsDefinition(payload);
        return true;
    } catch (error) {
        return false;
    }
}

export function validateGhPermissionsDefinitions(payload: unknown): apiTypes.GhPermissionsDefinitions {
    /** Schema is defined in {@link SCHEMA.definitions.GhPermissionsDefinitions } **/
    const validator = ajv.getSchema("SCHEMA#/definitions/GhPermissionsDefinitions");
    const valid = validator(payload);
    if (!valid) {
        const error = new Error(
            "Invalid GhPermissionsDefinitions: " +
                ajv.errorsText(validator.errors, { dataVar: "GhPermissionsDefinitions" })
        );
        error.name = "ValidationError";
        throw error;
    }
    return payload;
}

export function isGhPermissionsDefinitions(payload: unknown): payload is apiTypes.GhPermissionsDefinitions {
    try {
        validateGhPermissionsDefinitions(payload);
        return true;
    } catch (error) {
        return false;
    }
}
