FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["ProductService/ProductService.csproj", "ProductService/"]
RUN dotnet restore "ProductService/ProductService.csproj"
COPY . .
WORKDIR "/src/ProductService"
RUN dotnet build "ProductService.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "ProductService.csproj" -c Release -o /app

FROM base AS final
ENV ASPNETCORE_ENVIRONMENT development
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ProductService.dll"]
