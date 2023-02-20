# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashPrimereactApp <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashPrimereactApp',
        namespace = 'dash_primereact_app',
        propNames = c('id'),
        package = 'dashPrimereactApp'
        )

    structure(component, class = c('dash_component', 'list'))
}
