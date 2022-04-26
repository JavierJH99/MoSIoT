export interface NewTelemetry {
    DeviceTemplate_oid: number;
    Frecuency: number;
    Unit:      number;
    Name:      string;
    Type:      number;
    Event_: {
        Severity: number;
    };
}
