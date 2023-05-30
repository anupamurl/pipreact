"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await mongoose.connect(`mongodb://127.0.0.1:27017/peping_node`, {})
    },
];
//# sourceMappingURL=database.providers.js.map