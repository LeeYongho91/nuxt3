export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  if (to.path.includes("create")) {
    const user = useSupabaseUser();
    if(user.value) {
      return;
    }
    return navigateTo("/login");
  }

});