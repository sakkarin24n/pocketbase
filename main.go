package main

   import (
       "log"
       "os"

       "github.com/pocketbase/pocketbase"
       "github.com/pocketbase/pocketbase/core"
   )

   func main() {
       app := pocketbase.New()

       app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
           e.Router.GET("/*", func(c echo.Context) error {
               return c.File("./pb_public/index.html")
           })
           return nil
       })

       if err := app.Start(); err != nil {
           log.Fatal(err)
       }
   }
