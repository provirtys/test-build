import BaseHeader from "@components/BaseHeader.vue";

/** Header component with customizable text and icons*/

export default {
    title: "BaseHeader",
    component: BaseHeader,
    argTypes: {
        isMain: {
            options: [true, false],
            control: { type: "radio" },
        },
    },
};

export const Primary = {
    args: {
        isMain: true,
        factoryName: "integrity",
        needLogout: false,
    },
};

export const PrimaryLogout = {
    args: {
        isMain: true,
        factoryName: "integrity",
        needLogout: true,
    },
};

export const PrimaryLogoutReturn = {
    args: {
        isMain: false,
        factoryName: "integrity",
        needLogout: true,
    },
};

export const ReturnToMainPage = {
    args: {
        isMain: false,
        factoryName: "Section name",
        needLogout: false,
    },
};

export const LogoutReturn = {
    args: {
        isMain: false,
        factoryName: "Section name",
        needLogout: true,
    },
};
