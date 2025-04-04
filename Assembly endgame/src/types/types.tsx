export interface Key {
    id: string | undefined;
    key: string;
    className: string;
}

export interface KeyboardProps {
    keyboard: Key[];
    setMysticWord: React.Dispatch<React.SetStateAction<DataApi[]>>;
    setKeyState: React.Dispatch<React.SetStateAction<KeyState[]>>;
    setTryCounter: React.Dispatch<React.SetStateAction<number>>;
}

export interface DataApi {
    id: string;
    value: string;
    isActive: boolean;
}

export interface MysticWordProps {
    mysticWord: DataApi[];
    keyState?: KeyState[];
}

export interface KeyState {
    id: string;
    state: string;
}

export type PROPS = KeyboardProps & MysticWordProps;
