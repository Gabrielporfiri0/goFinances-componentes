import React from "react";
import { Register } from "../screens/Register";
import { Dashboard } from "../screens/Dashboard";

const {Navigator, Screen} = createBottomTabNavgator();

export function AppRoutes(){
    return(
        <Navigator id={undefined}>
         <Screen
            name="Listagem"
            component={Dashboard}
        />

         <Screen
            name="Cadastrar"
            component={Register}
        />
        </Navigator>
    )
}

function createBottomTabNavgator(): { Navigator: any; Screen: any; } {
    throw new Error("Function not implemented.");
}
