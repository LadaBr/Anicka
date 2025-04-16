export const parseArgs = <Args extends string = string>(...args: string[]) => {
    return args.filter(v => v.startsWith('--')).reduce((acc, v) => {
        const [arg, ...rest] = v.split('=');
        acc[arg.replace('--', '') as Args] = rest.join("=");
        return acc;
    }, {} as Partial<Record<Args, string>>);
}
