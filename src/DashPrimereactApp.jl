
module DashPrimereactApp
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.0.0"

include("jl/dashprimereactapp.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_primereact_app",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_primereact_app.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_primereact_app.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
