import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import logo from "@/assets/logo-white.png";

const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome muito longo" }),
  email: z.string()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail muito longo" }),
});

type FormValues = z.infer<typeof formSchema>;

const FormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    const BREVO_API_KEY = import.meta.env.VITE_SENDINBLUE_KEY;
    const BREVO_LIST_ID = 5;
    const BREVO_API_URL = "https://api.brevo.com/v3/contacts";

    const payload = {
      email: data.email, 
      attributes: {
        FIRSTNAME: data.name,
      },
      listIds: [BREVO_LIST_ID],
      emailOptin: true, 
      updateEnabled: true, 
    };

    try {
      const response = await fetch(BREVO_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(payload),
      });

      // Aceitar 201 (Criado) ou 409 (Já existe) como sucesso.
      if (!response.ok && response.status !== 409) {
        throw new Error(`Erro API Brevo: ${response.statusText}`);
      }

      // A Brevo enviará o E-mail de Confirmação Dupla.
      toast.success("Cupom resgatado com sucesso!", {
        description: "Verifique seu e-mail para confirmar a inscrição e receber a receita gratuita! (E-mail de confirmação enviado)",
        duration: 8000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Erro na Integração Brevo:", error);
      toast.error("Ops! Algo deu errado", {
        description: "Não foi possível resgatar o cupom. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="form-section" 
      className="py-20 px-4 gradient-warm relative overflow-hidden"
    >

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Preencha nosso formulário
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Benefits and Image - Left Side */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Benefícios da inscrição:
              </h3>
              <ul className="space-y-2 text-base list-disc list-inside">
                <li>Acesso a receitas exclusivas</li>
                <li>Novidades em primeira mão</li>
                <li>Promoções especiais</li>
                <li>Comunidade de amantes de crochê</li>
              </ul>
            </div>
          </div>

          {/* Form - Right Side */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-foreground">
                        Nome completo *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite seu nome"
                          {...field}
                          className="h-14 text-lg rounded-2xl border-2 border-primary/30 focus:border-primary shadow-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-foreground">
                        E-mail *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          {...field}
                          className="h-14 text-lg rounded-2xl border-2 border-primary/30 focus:border-primary shadow-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    "RESGATAR CUPOM"
                  )}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Ao se inscrever, você concorda em receber e-mails da Amigos de Algodão
                </p>
              </form>
            </Form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FormSection;
