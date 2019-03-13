import * as React from "react";

import { Form, Config } from "./Form";

export interface AsyncFormProps {
    name: string;
    fetchConfig: () => Promise<Config>;
}

export const AsyncForm: React.FunctionComponent<AsyncFormProps> = React.memo(({ fetchConfig, name }) => {
    const [ config, setConfig ] = React.useState<Config | undefined>();

    React.useEffect(() => {
        fetchConfig().then(setConfig);
    }, []);

    if (!config) {
        return null;
    }

    return <Form name={name} config={config}/>;
});

AsyncForm.displayName = "AsyncIFrameForm";
