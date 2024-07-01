export class ProductPackage {
        private internetLabel: string | undefined;
        private telephoneNumber: number | undefined;
        private tvChannels: string[] | undefined;
        private mobileNumber: number | undefined;

        private constructor() {}

        public static createWithInternet(internetLabel: string): ProductPackage {
            const instance = new ProductPackage();
            instance.internetLabel = internetLabel;
            return instance;
        }

        public static createWithMobileAndInternet(internetLabel: string,mobileNumber: number): ProductPackage {
            const instance = new ProductPackage();
            instance.mobileNumber = mobileNumber;
            instance.internetLabel = internetLabel;
            return instance;
        }

        public static createWithMobileInternetAndTv(internetLabel: string, mobileNumber: number, tvChannels: string[]): ProductPackage {
            const instance = new ProductPackage();
            instance.mobileNumber = mobileNumber;
            instance.internetLabel = internetLabel;
            instance.tvChannels = tvChannels;
            return instance;
        }

        public static createWithInternetAndVoIP(internetLabel: string, telephoneNumber: number): ProductPackage {
            const instance = new ProductPackage();
            instance.internetLabel = internetLabel;
            instance.telephoneNumber = telephoneNumber;
            return instance;
        }

        public static createWithMobileInternetTvAndVoIP(internetLabel: string, mobileNumber: number, telephoneNumber: number, tvChannels: string[]): ProductPackage {
            const instance = new ProductPackage();
            instance.mobileNumber = mobileNumber;
            instance.internetLabel = internetLabel;
            instance.telephoneNumber = telephoneNumber;
            instance.tvChannels = tvChannels;
            return instance;
        }

        public static createWithInternetAndTv(internetLabel: string, tvChannels: string[]): ProductPackage {
            const instance = new ProductPackage();
            instance.internetLabel = internetLabel;
            instance.tvChannels = tvChannels;
            return instance;
        }

        public static createWithInternetVoIPAndTv(internetLabel: string, telephoneNumber: number, tvChannels: string[]): ProductPackage {
            const instance = new ProductPackage();
            instance.internetLabel = internetLabel;
            instance.telephoneNumber = telephoneNumber;
            instance.tvChannels = tvChannels;
            return instance;
        }

        public hasInternet(): boolean {
            return this.internetLabel !== undefined;
        }

        public hasVOIP(): boolean {
            return this.telephoneNumber !== undefined;
        }

        public hasTv(): boolean {
            return this.tvChannels !== undefined;
        }

        public hasMobile(): boolean {
            return this.mobileNumber !== undefined;
        }
}

