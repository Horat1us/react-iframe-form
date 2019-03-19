import * as React from "react";

export interface Config {
    data: { [ k: string ]: any; };
    method: "GET" | "POST" | "get" | "post",
    url: string;
}

export interface FormProps {
    name: string;
    config: Config,
}

export const Form: React.FunctionComponent<FormProps> = React.memo(({ config, name }) => {
    const [ isSent, setIsSent ] = React.useState<boolean>(false);

    const submitOnMount = React.useCallback((form?: HTMLFormElement) => {
        if (!form) {
            return;
        }

        form.submit();
        setIsSent(true);
    }, [ setIsSent ]);

    return (
        <>
            <iframe name={name}/>
            {!isSent && (
                <form target={name} action={config.url} method={config.method} ref={submitOnMount}>
                    {Object.keys(config.data).map((key) => (
                        <input
                            type={"hidden"}
                            name={key}
                            key={key}
                            value={
                                ("string" === typeof config.data[ key ])
                                    ? config.data[ key ]
                                    : JSON.stringify(config.data[ key ])
                            }
                        />
                    ))}
                </form>
            )}
        </>
    )
});

Form.displayName = "IFrameForm";
