export class User {
    constructor(
        private id: string,
        private code: number,
        private name: string,
        private cpf: string,
        private address: string,
        private phoneNumber: string,
        private password: string,
        private obs: string

    ) { }


    public getId(): string {
        return this.id
    }
    public setId(id: string): void {
        this.id = id
    }

    public getCode(): number {
        return this.code
    }
    public setCode(code: number): void {
        this.code = code
    }


    public getName(): string {
        return this.name
    }
    public setName(name: string): void {
        this.name = name
    }


    public getCPF(): string {
        return this.cpf
    }
    public setCPF(cpf: string): void {
        this.cpf = cpf
    }


    public getAddress(): string {
        return this.address
    }
    public setAddress(address: string): void {
        this.address = address
    }


    public getPhoneNumber(): string {
        return this.phoneNumber
    }
    public setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber
    }


    public getPassword(): string {
        return this.password
    }
    public setPassword(password: string): void {
        this.password = password
    }


    public getObs(): string {
        return this.obs
    }
    public setObs(obs: string): void {
        this.obs = obs
    }
}