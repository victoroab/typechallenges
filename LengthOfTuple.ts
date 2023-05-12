type Length<T extends readonly any[]> = T['length']

type tesla = ['tesla', 'moddel 3', 'model x', 'model y']
type teslaLength = Length<tesla>
